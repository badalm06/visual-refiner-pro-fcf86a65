import { Reveal } from "./Reveal";
import vrindavan from "@/assets/circle-vrindavan.jpg";
import govardhan from "@/assets/circle-govardhan.jpg";
import barsana from "@/assets/circle-barsana.jpg";

const POSTS = [
  {
    img: vrindavan,
    title: "Top 7 Temples to Visit in Vrindavan on Your Pilgrimage",
    category: "Vrindavan Guide",
  },
  {
    img: govardhan,
    title: "Govardhan Parikrama: A Step-by-Step Spiritual Journey",
    category: "Pilgrimage Tips",
  },
  {
    img: barsana,
    title: "Experiencing Lathmar Holi in Barsana: What to Expect",
    category: "Festivals & Culture",
  },
];

export function Blog() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Latest Blog
          </span>
          <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">
            Stories from Braj
          </h2>
          <p className="mt-4 text-muted-foreground">
            Travel guides, temple stories and pilgrim tips — fresh from the heart of Braj Bhoomi.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group hover-lift overflow-hidden rounded-2xl border border-border bg-card">
                <a href="#" className="block">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-card-foreground transition-colors group-hover:text-brand">
                      {p.title}
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {p.category}
                    </div>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
