export function Hero() {
  return (
    <section className="relative bg-background pt-24 pb-10 md:pt-28 md:pb-14">
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-3xl shadow-card">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-[60vh] w-full object-cover md:h-[70vh]"
          />
        </div>
      </div>
    </section>
  );
}
