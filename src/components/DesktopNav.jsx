function NavLink({name}){
  return (
    <li>
      <a href="#" className="text-slate-gray dark:!text-white/70 font-medium">{name}</a>
    </li>
  );
};

function NavList(){
  return (
    <nav>
      <ul className="flex gap-[48px]">
        {data.map((item, i) => (
          <NavLink key={i} name={item} />
        ))}
      </ul>
    </nav>
  );
};

const data = ["Product", "Features", "Pricing", "Company", "Blog"];

export default function DesktopNav(){
  return (
    <div className="gap-[48px] w-[75%] hidden lg:!flex items-center">
      <NavList />
      <button className="bg-prime py-[8px] px-[16px] rounded-[6px] text-white text-center ml-auto">Get Started</button>
    </div>
  );
}