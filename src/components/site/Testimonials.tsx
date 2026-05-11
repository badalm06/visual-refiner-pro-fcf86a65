import { Carousel, TestimonialCard, type iTestimonial } from "./TestimonialCarousel";
import { Reveal } from "./Reveal";

const TESTIMONIALS: iTestimonial[] = [
  {
    name: "Anjali Sharma",
    designation: "Pilgrim, Delhi",
    description:
      "Brajmiles ne hamari Vrindavan yatra ko itna spiritual aur comfortable banaya. Banke Bihari darshan se lekar Prem Mandir tak — sab kuch perfectly planned tha. Guide bahut knowledgeable the.",
    profileImage: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "Rakesh Agarwal",
    designation: "Devotee, Mumbai",
    description:
      "Govardhan parikrama ka anubhav jeevan bhar yaad rahega. Hotel ekdam mandir ke paas tha aur bhojan shudh sattvik. Highly recommended for spiritual travelers!",
    profileImage: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Sunita Verma",
    designation: "Family Traveler, Jaipur",
    description:
      "Family ke saath Mathura-Vrindavan trip karwaya. Bachchon se lekar bujurgon tak sabka khayal rakha gaya. Sab arrangements top-class the, har temple mein priority darshan mila.",
    profileImage: "https://i.pravatar.cc/400?img=32",
  },
  {
    name: "Vikram Singh",
    designation: "Bhakt, Lucknow",
    description:
      "Barsana aur Nandgaon ki yatra ne dil chhoo liya. Radha Rani ke darbar mein jo shanti mili, woh shabdon mein bayan nahi kar sakte. Thank you Brajmiles team!",
    profileImage: "https://i.pravatar.cc/400?img=68",
  },
  {
    name: "Priya Mehta",
    designation: "Cultural Traveler, Pune",
    description:
      "Holi ke time Barsana ki Lathmar Holi dekhne ka mauka mila — Brajmiles ne har arrangement bahut achhe se kiye. Unforgettable experience, zaroor phir jayenge!",
    profileImage: "https://i.pravatar.cc/400?img=24",
  },
  {
    name: "Mohan Lal Gupta",
    designation: "Retired, Kanpur",
    description:
      "Senior citizens ke liye perfect tour. AC vehicle, comfortable hotel aur har temple mein priority darshan. Bahut bahut dhanyawad Brajmiles ki poori team ko!",
    profileImage: "https://i.pravatar.cc/400?img=15",
  },
  {
    name: "Neha Kapoor",
    designation: "Spiritual Seeker, Chandigarh",
    description:
      "Gokul ki gallian, Raman Reti ki reti — bachpan ki Krishna kahaniyan jeevit ho gayi. Brajmiles team bahut caring aur professional hai.",
    profileImage: "https://i.pravatar.cc/400?img=45",
  },
  {
    name: "Amit Joshi",
    designation: "Solo Traveler, Ahmedabad",
    description:
      "3 din ka short trip plan kiya tha — har minute worth it tha. Pricing bhi transparent thi, koi hidden charges nahi. Solo travelers ke liye perfect.",
    profileImage: "https://i.pravatar.cc/400?img=51",
  },
  {
    name: "Kavita Iyer",
    designation: "Devotee, Bangalore",
    description:
      "ISKCON Vrindavan ka mangal aarti aur Nidhivan ka rahasya — Brajmiles ke saath har anubhav divya tha. Phir zaroor jayenge family ke saath.",
    profileImage: "https://i.pravatar.cc/400?img=39",
  },
];

export function Testimonials() {
  const cards = TESTIMONIALS.map((t, i) => (
    <TestimonialCard key={t.name} testimonial={t} index={i} />
  ));

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-pro">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">
            What our pilgrims say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from devotees who experienced Braj with us.
          </p>
        </Reveal>
      </div>

      <div className="mt-10">
        <Carousel items={cards} />
      </div>
    </section>
  );
}
