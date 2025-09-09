export default function Head({head, title, desc}){
  return (
    <>
      <h2 className="font-bold text-prime text-center">{head}</h2>
      <h3 className="font-bold text-3xl text-gunmetal text-center">{title}</h3>
      <p className="text-lg text-slate-gray text-center max-w-[512px] mx-auto">{desc}</p>
    </>
  );
};