"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface iTestimonial {
  name: string;
  designation: string;
  description: string;
  profileImage: string;
}

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      onOutsideClick();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: iTestimonial;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => setIsExpanded(false);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleCollapse();
    };
    document.body.style.overflow = isExpanded ? "hidden" : "";
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl rounded-3xl bg-background p-8 md:p-10 shadow-2xl border border-border"
            >
              <button
                onClick={handleCollapse}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background hover:bg-brand transition"
              >
                <X className="h-4 w-4" />
              </button>
              <Quote className="h-10 w-10 text-brand" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                {testimonial.designation}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">
                {testimonial.name}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {testimonial.description}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand"
                />
                <div className="text-sm text-muted-foreground">Verified pilgrim</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={handleExpand}
        className={cn(
          "group relative flex h-[420px] w-[260px] md:h-[460px] md:w-[320px] shrink-0 flex-col justify-end overflow-hidden rounded-3xl text-left",
          "bg-foreground transition-transform hover:-translate-y-1"
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity group-hover:opacity-80"
          style={{ backgroundImage: `url(${testimonial.profileImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/10" />

        <div className="relative z-10 p-6 md:p-7">
          <Quote className="h-8 w-8 text-brand" />
          <p className="mt-3 text-base font-medium leading-snug text-white">
            {testimonial.description.length > 110
              ? `${testimonial.description.slice(0, 110)}...`
              : testimonial.description}
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
            <img
              src={testimonial.profileImage}
              alt={testimonial.name}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-brand"
            />
            <div>
              <p className="text-sm font-bold text-white">{testimonial.name}</p>
              <p className="text-xs text-white/70">
                {testimonial.designation.length > 28
                  ? `${testimonial.designation.slice(0, 28)}...`
                  : testimonial.designation}
              </p>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export const TestimonialMarquee = ({
  items,
  duration = 60,
}: {
  items: iTestimonial[];
  duration?: number;
}) => {
  const loop = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex gap-5 md:gap-6 w-max py-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
};
