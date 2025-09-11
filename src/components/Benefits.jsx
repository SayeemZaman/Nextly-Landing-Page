import benefit1 from "../assets/images/benefit-one.png";
import benefit2 from "../assets/images/benefit-two.png";
import FeatureList from "./Features";
import { FaceSmileIcon, ChartBarSquareIcon, CursorArrowRaysIcon, DevicePhoneMobileIcon, AdjustmentsVerticalIcon, SunIcon } from "@heroicons/react/24/outline";
import Head from "./Head";

const features1 = [
  {
    icn: FaceSmileIcon,
    title: "Understand your customers",
    desc: "Then explain the first point breifly in one or two lines."
  },
  {
    icn: ChartBarSquareIcon,
    title: "Improve acquisition",
    desc: "Here you can add the next benefit point."
  },
  {
    icn: SunIcon,
    title: "Drive customer retention",
    desc: "This will be your last bullet point in this section."
  }
]

const features2 = [
  {
    icn: DevicePhoneMobileIcon,
    title: "Mobile Responsive Template",
    desc: "Nextly is designed as a mobile first responsive template."
  },
  {
    icn: AdjustmentsVerticalIcon,
    title: "Powered by Next.js & TailwindCSS",
    desc: "This template is powered by latest technologies and tools."
  },
  {
    icn: CursorArrowRaysIcon,
    title: "Dark & Light Mode",
    desc:"Nextly comes with a zero-config light & dark mode."
  }
];

function Part1(){
  return (
    <div className="ben gap-[12px]">
      <Head
        head="NEXTLY BENEFITS"
        title="Why should you use this landing page"
        desc="Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source."
      />
      <div className="content">
        <img src={benefit1} alt="Benefits Illustration" />
        <div className="flex flex-col gap-[16px]">
          <h3>Highlight your benefits</h3>
          <p>
            You can use this space to highlight your first benefit or a feature of your product.
            It can also contain an image or Illustration like in the example along with some bullet points.
          </p>
          <FeatureList arr={features1} />
        </div>
      </div>
    </div>
  );
};


function Part2(){
  return (
    <div className="ben content flex lg:!flex-row-reverse gap-[24px]">
      <img src={benefit2} alt="Benefits Illustration" />
      <div className="flex flex-col gap-[24px] lg:py-[32px]">
        <h3>
          Offer more benefits here
        </h3>
        <p className="mb-[16px]">
          You can use this same layout with a flip image to highlight your rest of the benefits of your product.
          It can also contain an image or Illustration as above section along with some bullet points.
        </p>
        <FeatureList arr={features2} />
      </div>
    </div>
  );
};


export default function Benefits(){
  return (
    <section id="benefits">
      <Part1 />
      <Part2 />
    </section>
  );
}