import Social from "./Social";
import logo from "../assets/images/logo.svg";

const data1 = ["Products", "Features", "Pricing", "Company", "Blog"];
const data2 = ["Terms", "Privacy", "Legal"];

function Link({item}){
  return (
    <p className="my-[8px] text-lg text-slate-gray hover:text-prime transition">
      {item}
    </p>
  );
};

function LinkList({arr}){
  return (
    <div className="my-[32px]">
      {arr.map((item, i) => (
        <Link key={i} item={item} />
      ))}
    </div>
  )
};

export default function Footer(){
  return (
    <footer>
      <div className="flex gap-[8px] items-center my-[16px]">
        <img className="w-[32px]" src={logo} alt="Logo" />
        <p className="font-medium text-prime text-2xl">Nextly</p>
      </div>
      <p className="text-slate-gray text-lg">
        Nextly is a free landing page & marketing website template for startups and indie projects.
        Its built with Next.js & TailwindCSS. And its completely open-source.
      </p>
      <div>
        <LinkList arr={data1} />
        <LinkList arr={data2} />
      </div>
      <div className="my-[16px] flex flex-col gap-[16px]">
        <p className="text-black">Follow us</p>
        <Social />
      </div>
      <p className="text-center text-lg mt-[32px]">
        © 2025 Nextly. Design is from Nextly template. <br />
        Icons are from Fontawesome & Heroicons.
      </p>
    </footer>
  );
}