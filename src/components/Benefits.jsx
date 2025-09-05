import benefit1 from "../assets/images/benefit-one.png";

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


export default function Benefits(){
  return (
    <section id="benefits" className="flex flex-col gap-[8px]">
      <Part1 />
    </section>
  );
}