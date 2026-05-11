import { TestimonialMarquee, type iTestimonial } from "./TestimonialCarousel";
import { Reveal } from "./Reveal";

const TESTIMONIALS: iTestimonial[] = [
  {
    name: "Anjali Sharma",
    designation: "Pilgrim, Delhi",
    description:
      "Brajmiles ne hamari Vrindavan yatra ko itna spiritual aur comfortable banaya. Banke Bihari darshan se lekar Prem Mandir tak — sab kuch perfectly planned tha.",
    profileImage:
      "https://images.unsplash.com/photo-1623091410901-00e2d268901f?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Rakesh Agarwal",
    designation: "Devotee, Mumbai",
    description:
      "Govardhan parikrama ka anubhav jeevan bhar yaad rahega. Hotel ekdam mandir ke paas tha aur bhojan shudh sattvik. Highly recommended!",
    profileImage:
      "https://images.unsplash.com/photo-1622495966599-2cd9d8d3b2d6?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Sunita Verma",
    designation: "Family Traveler, Jaipur",
    description:
      "Family ke saath Mathura-Vrindavan trip karwaya. Bachchon se lekar bujurgon tak sabka khayal rakha gaya. Har temple mein priority darshan mila.",
    profileImage:
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Vikram Singh",
    designation: "Bhakt, Lucknow",
    description:
      "Barsana aur Nandgaon ki yatra ne dil chhoo liya. Radha Rani ke darbar mein jo shanti mili, woh shabdon mein bayan nahi kar sakte. Thank you Brajmiles!",
    profileImage:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Priya Mehta",
    designation: "Cultural Traveler, Pune",
    description:
      "Holi ke time Barsana ki Lathmar Holi dekhne ka mauka mila — Brajmiles ne har arrangement bahut achhe se kiye. Unforgettable experience!",
    profileImage:
      "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Mohan Lal Gupta",
    designation: "Retired, Kanpur",
    description:
      "Senior citizens ke liye perfect tour. AC vehicle, comfortable hotel aur har temple mein priority darshan. Bahut bahut dhanyawad!",
    profileImage:
      "https://images.unsplash.com/photo-1566807810030-65a9bcef6ea2?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Neha Kapoor",
    designation: "Spiritual Seeker, Chandigarh",
    description:
      "Gokul ki gallian, Raman Reti ki reti — bachpan ki Krishna kahaniyan jeevit ho gayi. Brajmiles team bahut caring aur professional hai.",
    profileImage:
      "https://images.unsplash.com/photo-1581824283135-0666cf353f35?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Amit Joshi",
    designation: "Solo Traveler, Ahmedabad",
    description:
      "3 din ka short trip plan kiya tha — har minute worth it tha. Pricing bhi transparent thi, koi hidden charges nahi.",
    profileImage:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Kavita Iyer",
    designation: "Devotee, Bangalore",
    description:
      "ISKCON Vrindavan ka mangal aarti aur Nidhivan ka rahasya — Brajmiles ke saath har anubhav divya tha. Phir zaroor jayenge.",
    profileImage:
      "https://images.unsplash.com/photo-1610088441520-4352457e7095?w=600&q=80&auto=format&fit=crop",
  },
];

export function Testimonials() {
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
        <TestimonialMarquee items={TESTIMONIALS} duration={70} />
      </div>
    </section>
  );
}
