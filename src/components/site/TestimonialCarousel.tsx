"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface iTestimonial {
  name: string;
  designation: string;
  description: string;
  profileImage: string;
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
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

export const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const handleScrollLeft = () => carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const handleScrollRight = () => carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 230 : 320;
      const gap = isMobile ? 12 : 20;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        onScroll={checkScrollability}
        className="flex w-full overflow-x-scroll scroll-smooth py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-5 md:gap-6 px-4 md:px-8">
          {items.map((item, index) => (
            <motion.div
              key={"card" + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index, ease: "easeOut" }}
              className="last:pr-8"
            >
              {React.cloneElement(item, { onCardClose: () => handleCardClose(index) })}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-end gap-3 px-4 md:px-8">
        <button
          aria-label="Previous"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-soft transition disabled:opacity-30 hover:bg-brand"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background shadow-soft transition disabled:opacity-30 hover:bg-brand"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export const TestimonialCard = ({
  testimonial,
  index,
  onCardClose = () => {},
}: {
  testimonial: iTestimonial;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleCollapse();
    };
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
          "group relative flex h-[420px] w-[260px] md:h-[460px] md:w-[320px] flex-col justify-end overflow-hidden rounded-3xl text-left",
          "bg-foreground transition-transform hover:-translate-y-1"
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity group-hover:opacity-70"
          style={{ backgroundImage: `url(${testimonial.profileImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

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
