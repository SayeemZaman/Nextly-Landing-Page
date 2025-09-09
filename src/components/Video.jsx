import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Head from "./Head";

export default function Video(){
  return (
    <section id="video" className="flex flex-col gap-[16px]">
      <Head
        head="WATCH A VIDEO"
        title="Learn how to fullfil your needs"
        desc={`
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate.
          So, don't forget to add one. Just like this.
        `}
      />
      <div className="flex justify-center items-center rounded-[16px] mt-[64px] w-full h-[170px] md:h-[35dvh] lg:h-[80dvh] bg-gradient-to-tr from-tropical-indigo to-palatinate-blue">
        <span className="flex justify-center items-center rounded-full p-[20px] bg-white aspect-square">
          <FontAwesomeIcon icon={faPlay} size="2x" style={{color: "#6366F1"}} />
        </span>
      </div>
    </section>
  );
}