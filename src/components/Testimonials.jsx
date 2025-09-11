import Head from './Head';
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

const data = [
  {
    desc: "Share a real testimonial that hits some of your benefits from one of your popular customer.",
    pfp: user1,
    name: "Sarah Steiner",
    role: "VP Sales at Google"
  },
  {
    desc: "Make sure you only pick the right sentence to keep it short and simple.",
    pfp: user2,
    name: "Dylan Ambrose",
    role: "Lead marketer at Netflix"
  },
  {
    desc: "This is an awesome landing page template I've seen. I would use this for anything.",
    pfp: user3,
    name: "Gabrielle Winn",
    role: "Co-founder of Acme Inc"
  }
];

function TestimonialCard({desc, pfp, name, role}) {
  return (
    <div className={`bg-soft-white dark:bg-slate-gray/20 p-[48px] flex flex-col gap-[32px] rounded-[16px] my-[16px] ${name === "Sarah Steiner" && "lg:col-span-2"}`}>
      <p className="text-2xl font-medium">{desc}</p>
      <div className="flex gap-[8px] items-center">
        <img src={pfp} alt="Profile picture" className="w-[48px] h-[48px] rounded-full" />
        <div>
          <p className="text-gunmetal text-xl font-medium">{name}</p>
          <p className="text-lg">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex flex-col gap-[16px]">
      <Head
        head="TESTIMONIALS"
        title="Here's what our customers said"
        desc="Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers."
      />
      <div className="mt-[32px] lg:grid lg:grid-cols-2 lg:gap-x-[32px]">
        {data.map((item, i) => (
          <TestimonialCard
            key={i}
            desc={item.desc}
            pfp={item.pfp}
            name={item.name}
            role={item.role}
          />
        ))}
      </div>
    </section>
  );
}