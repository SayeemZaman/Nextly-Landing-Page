import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "../assets/images/hero.png";

export default function Hero(){
  return (
    <section id="home" className="lg:grid lg:grid-cols-2 lg:my-[32px]">
      <div className="flex flex-col gap-[16px]">
        <h1 className="font-satoshi font-extrabold text-4xl text-gunmetal">
          Free Landing Page Template for startups
        </h1>
        <p className="text-slate-gray text-lg">
         Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.
        </p>
        <div className="flex flex-col lg:flex-row gap-[16px]">
          <button className="bg-prime py-[16px] px-[32px] rounded-[4px] font-satoshi font-bold text-white self-start">Download For Free</button>
          <span className="flex items-center gap-[4px]">
            <FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#6b737d"}} />
            <p className="font-satoshi text-slate-gray">View on Github</p>
          </span>
        </div>
        <p className="mt-[48px] font-satoshi font-semibold text-slate-gray text-xl text-center">
          Trusted by <span className="text-prime">2000+</span> customers worldwide
        </p>
      </div>
      <img src={hero} alt="Hero Illustration" className="hidden lg:block" />
    </section>
  );
}