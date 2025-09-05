import benefit1 from "../assets/images/benefit-one.png";
import benefit2 from "../assets/images/benefit-two.png";

function Part1(){
  return (
    <div className="flex flex-col gap-[12px] mb-[64px]">
      <h2>NEXTLY BENEFITS</h2>
      <h3 className="text-center">Why should you use this landing page</h3>
      <p className="text-center">
        Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.
      </p>
      <img src={benefit1} alt="Benefits Image" />
      <h3 className="mt-[16px]">Highlight your benefits</h3>
      <p>
        You can use this space to highlight your first benefit or a feature of your product.
        It can also contain an image or Illustration like in the example along with some bullet points.
      </p>
    </div>
  );
};


function Part2(){
  return (
    <div className="flex flex-col gap-[24px]">
      <img src={benefit2} alt="Benefits Image" />
      <h3 className="mt-[8px]">
        Offer more benefits here
      </h3>
      <p className="mb-[16px]">
        You can use this same layout with a flip image to highlight your rest of the benefits of your product.
        It can also contain an image or Illustration as above section along with some bullet points.
      </p>
    </div>
  );
};


export default function Benefits(){
  return (
    <section id="benefits" className="flex flex-col gap-[8px]">
      <Part1 />
      <Part2 />
    </section>
  );
}