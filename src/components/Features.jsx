function Feature({icn: Icon, title, desc}){
  return (
    <div className="flex gap-[12px] my-[24px] lg:my-[8px] h-[96px]">
      <span className="bg-secondary aspect-square relative top-[4px] p-[4px] h-[48px] flex justify-center items-center rounded">
        <Icon className="text-white w-[28px] h-[28px]" />
      </span>
      <div>
        <p className="font-medium !text-gunmetal !text-xl">{title}</p>
        <p className="!text-base">{desc}</p>
      </div>
    </div>
  );
};

export default function FeatureList({arr}){
  return (
    <div>
      {arr.map((item, i) => (
        <Feature key={i} icn={item.icn} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};