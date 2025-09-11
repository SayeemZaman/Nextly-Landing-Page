import Head from "./Head";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "Is this template completely free to use?",
    a: "Yes, this template is completely free to use."
  },
  {
    q: "Can I use it in a commercial project?",
    a: "Yes, you can."
  },
  {
    q: "What is your refund policy?",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  },
  {
    q: "Do you offer technical support?",
    a: "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support."
  },
];

function Faq({q,a}){
  return (
    <details className="group my-[32px] max-w-[512px] mx-auto">
      <summary className="flex items-center justify-between list-none cursor-poiner bg-soft-white dark:bg-slate-gray/20 dark:!text-white p-[16px] rounded-[8px] font-medium text-lg">
        {q}
        <ChevronDownIcon className="text-prime w-[16px] h-[16px] flex-shrink-0 group-open:rotate-180" />
      </summary>
      <p className="p-[16px] pb-0 text-lg">{a}</p>
    </details>
  );
};

export default function FaqList(){
  return (
    <section className="flex flex-col gap-[16px]">
      <Head
        head="FAQ"
        title="Frequently Asked Questions"
        desc="Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests."
      />
      <div className="relative">
        {faqs.map((item, i) => (
          <Faq key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
};