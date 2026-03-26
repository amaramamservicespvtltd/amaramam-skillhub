import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File;

    if (!name || !email || !phone || !resumeFile) {
      return new Response(
        JSON.stringify({ error: "Name, email, phone, and resume are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(resumeFile.type)) {
      return new Response(
        JSON.stringify({ error: "Only PDF and DOC/DOCX files are allowed" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Max 5MB
    if (resumeFile.size > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: "File size must be under 5MB" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Upload resume to storage
    const fileName = `${Date.now()}_${resumeFile.name}`;
    const arrayBuffer = await resumeFile.arrayBuffer();
    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(fileName, arrayBuffer, {
        contentType: resumeFile.type,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return new Response(
        JSON.stringify({ error: "Failed to upload resume" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save application record
    const { error: dbError } = await supabase
      .from("job_applications")
      .insert({
        name,
        email,
        phone,
        position: position || null,
        message: message || null,
        resume_url: fileName,
      });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save application" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const uint8Array = new Uint8Array(arrayBuffer);
      let binaryString = "";
      for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
      }
      const base64Content = btoa(binaryString);

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Amaramam Skill Hub <noreply@amaramamskillhub.com>",
          to: ["info@amaramam.com"],
          subject: `New Resume: ${name} - ${position || "General Application"}`,
          html: `
            <h2>New Job Application</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Position:</strong> ${position || "Not specified"}</p>
            <p><strong>Message:</strong> ${message || "No message"}</p>
            <p>Resume is attached below.</p>
          `,
          attachments: [
            {
              filename: resumeFile.name,
              content: base64Content,
            },
          ],
        }),
      });

      if (!emailRes.ok) {
        console.error("Email error:", await emailRes.text());
      }
    } else {
      console.log("RESEND_API_KEY not set, skipping email notification");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Application submitted successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
