import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mentorBalakrishna from "@/assets/mentor-balakrishna.jpeg";
import mentorSrinivas from "@/assets/mentor-srinivas.jpeg";
import mentorPavanaKrishna from "@/assets/mentor-pavana-krishna.jpeg";
import mentorKarthik from "@/assets/mentor-karthik.jpeg";

const mentors = [
  {
    name: "P. Balakrishna",
    expertise: "Quantum Technology Mentor / Instructor",
    tagline: "Expert in Quantum Technology with real-world training experience.",
    image: mentorBalakrishna,
  },
  {
    name: "Srinivas",
    expertise: "Java Full Stack Mentor / Instructor",
    tagline: "Expert in Java Full Stack Development with real-world training experience.",
    image: mentorSrinivas,
  },
  {
    name: "Pavana Krishna",
    expertise: "Data Science with Python Mentor / Instructor",
    tagline: "Expert in Data Science with Python with real-world training experience.",
    image: mentorPavanaKrishna,
  },
  {
    name: "P. Karthik",
    expertise: "HTML, CSS, Python, Generative AI, Prompt Engineering, WordPress",
    tagline: "Mentor / Instructor",
    image: mentorKarthik,
  },
];

const MentorCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollSpeed = 0.5; // pixels per frame

  // Triple the items for seamless infinite loop
  const items = [...mentors, ...mentors, ...mentors];

  const resetScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += singleSetWidth;
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Start in the middle set
    el.scrollLeft = el.scrollWidth / 3;
  }, []);

  useEffect(() => {
    const animate = () => {
      const el = scrollRef.current;
      if (el && !isPaused) {
        el.scrollLeft += scrollSpeed;
        resetScroll();
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, resetScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-mentor-card]")?.offsetWidth ?? 300;
    const gap = 32;
    const amount = (cardWidth + gap) * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(resetScroll, 500);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground -translate-x-1/2"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground translate-x-1/2"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/50 to-transparent z-[5] pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/50 to-transparent z-[5] pointer-events-none" />

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((mentor, i) => (
          <div
            key={`${mentor.name}-${i}`}
            data-mentor-card
            className="flex-shrink-0 w-[250px] sm:w-[270px] text-center group/card py-4"
          >
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover/card:ring-primary/40 transition-all duration-300 shadow-lg">
              <img
                src={mentor.image}
                alt={`${mentor.name} - ${mentor.expertise}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">{mentor.name}</h3>
            <p className="text-sm font-medium text-primary mt-1">{mentor.expertise}</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto italic">
              {mentor.tagline.startsWith("Expert") ? `"${mentor.tagline}"` : mentor.tagline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorCarousel;
