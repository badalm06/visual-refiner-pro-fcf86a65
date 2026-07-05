export function Hero() {
  return (
    <section
      className="relative bg-background pt-24 pb-10 md:pt-28 md:pb-14"
      aria-label="Braj Miles — Spiritual tour packages to Vrindavan, Mathura and Govardhan"
    >
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-3xl shadow-card">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-[60vh] w-full object-cover md:h-[70vh]"
            aria-hidden="true"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

          {/* SEO h1 — visible on mobile, subtle on desktop */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-5 text-center pointer-events-none">
            <h1 className="sr-only">
              Braj Miles — Tour Packages to Vrindavan, Mathura, Govardhan, Gokul, Barsana &amp;
              Nandgaon | 20+ Years of Crafting Memorable Spiritual Journeys
            </h1>
            {/* Visible tagline on hero for all users */}
            <div className="pointer-events-auto max-w-2xl">
              <p className="hidden text-sm font-medium text-white/90 drop-shadow md:block md:text-base">
                Vrindavan &bull; Mathura &bull; Govardhan &bull; Gokul &bull; Barsana &bull; Nandgaon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
