import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.918 15.918 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.35 22.606c-.39 1.1-1.932 2.014-3.162 2.28-.842.18-1.94.322-5.64-1.212-4.736-1.964-7.786-6.768-8.024-7.084-.228-.316-1.918-2.556-1.918-4.876s1.214-3.46 1.644-3.934c.39-.432.912-.59 1.182-.59.146 0 .272.008.39.014.43.018.646.042 .93.72.356.846 1.224 2.988 1.33 3.206.106.218.21.514.062.808-.14.3-.262.434-.48.684-.218.25-.424.44-.642.71-.2.234-.424.484-.176.928.248.446 1.1 1.816 2.366 2.942 1.626 1.448 2.994 1.9 3.42 2.106.426.206.674.174.922-.104.256-.286 1.088-1.264 1.378-1.698.286-.434.576-.362.97-.218.396.146 2.524 1.192 2.956 1.408.432.218.718.326.824.508.106.182.106 1.066-.284 2.166z" />
  </svg>
);

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip popup */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-background rounded-2xl shadow-xl border p-4 pr-8 max-w-[220px]"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm font-medium text-foreground leading-snug">
              Hi 👋<br />
              Any enquiry about courses?<br />
              <span className="text-primary font-semibold">Chat with us!</span>
            </p>
            {/* Speech triangle */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-background border-b border-r rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ backgroundColor: "hsl(142 70% 45%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 5 }}
          whileHover={{ scale: 1.15 }}
        >
          <WhatsAppIcon />
        </motion.div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
