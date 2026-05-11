import { TestimonialsColumn, type Testimonial } from "./TestimonialsColumn";
import { Reveal } from "./Reveal";

const testimonials: Testimonial[] = [
  {
    text: "Brajmiles ne hamari Vrindavan yatra ko itna spiritual aur comfortable banaya. Banke Bihari darshan se lekar Prem Mandir tak — sab kuch perfectly planned tha.",
    image: "https://i.pravatar.cc/80?img=47",
    name: "Anjali Sharma",
    role: "Pilgrim, Delhi",
  },
  {
    text: "Govardhan parikrama ka anubhav jeevan bhar yaad rahega. Guide bahut knowledgeable the aur hotel ekdam mandir ke paas. Highly recommended!",
    image: "https://i.pravatar.cc/80?img=12",
    name: "Rakesh Agarwal",
    role: "Devotee, Mumbai",
  },
  {
    text: "Family ke saath Mathura-Vrindavan trip karwaya. Bachchon se lekar bujurgon tak sabka khayal rakha gaya. Bhojan bhi shudh sattvik tha.",
    image: "https://i.pravatar.cc/80?img=32",
    name: "Sunita Verma",
    role: "Family Traveler, Jaipur",
  },
  {
    text: "Barsana aur Nandgaon ki yatra ne dil chhoo liya. Radha Rani ke darbar mein jo shanti mili, woh shabdon mein bayan nahi kar sakte. Thank you Brajmiles!",
    image: "https://i.pravatar.cc/80?img=68",
    name: "Vikram Singh",
    role: "Bhakt, Lucknow",
  },
  {
    text: "Holi ke time Barsana ki Lathmar Holi dekhne ka mauka mila — Brajmiles ne sab arrangements bahut achhe se kiye. Unforgettable experience!",
    image: "https://i.pravatar.cc/80?img=24",
    name: "Priya Mehta",
    role: "Cultural Traveler, Pune",
  },
  {
    text: "Senior citizens ke liye perfect tour. AC vehicle, comfortable hotel aur har temple mein priority darshan. Bahut bahut dhanyawad!",
    image: "https://i.pravatar.cc/80?img=15",
    name: "Mohan Lal Gupta",
    role: "Retired, Kanpur",
  },
  {
    text: "Gokul ki gallian, Raman Reti ki reti — bachpan ki Krishna kahaniyan jeevit ho gayi. Brajmiles team bahut caring hai.",
    image: "https://i.pravatar.cc/80?img=45",
    name: "Neha Kapoor",
    role: "Spiritual Seeker, Chandigarh",
  },
  {
    text: "3 din ka short trip plan kiya tha — har minute worth it tha. Pricing bhi transparent, koi hidden charges nahi.",
    image: "https://i.pravatar.cc/80?img=51",
    name: "Amit Joshi",
    role: "Solo Traveler, Ahmedabad",
  },
  {
    text: "ISKCON Vrindavan ka mangal aarti aur Nidhivan ka rahasya — Brajmiles ke saath har anubhav divya tha. Phir zaroor jayenge.",
    image: "https://i.pravatar.cc/80?img=39",
    name: "Kavita Iyer",
    role: "Devotee, Bangalore",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28 relative overflow-hidden">
      <div className="container-pro z-10">
        <Reveal className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          <span className="border border-border py-1 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-5 text-4xl font-bold text-foreground md:text-5xl">
            What our pilgrims say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from devotees who experienced Braj with us.
          </p>
        </Reveal>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
}
