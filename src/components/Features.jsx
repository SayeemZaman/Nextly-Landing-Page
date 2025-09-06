import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Feature({icn, title, desc}){
  return (
    <div className="flex gap-[12px] my-[8px]">
      <span className="bg-secondary aspect-square relative top-[4px] p-[4px] h-[48px] flex justify-center items-center rounded">
        <FontAwesomeIcon icon={icn} size="lg" style={{color: "#ffffff"}} />
      </span>
      <div>
        <p className="font-medium !text-gunmetal !text-xl">{title}</p>
        <p className="!text-base">{desc}</p>
      </div>
    </div>
  );
};