import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function NavButton({fnc, isOpen}){
  return (
    <button onClick={fnc} aria-label="Open Navigation" className="absolute w-[40px] h-[32px] right-[32px] top-[32px]">
      <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="xl" style={{color: "#202937"}} />
    </button>
  );
};

function NavLink({item}){
  return (
    <li className="my-[16px]">
      <a href="#" className="font-satoshi font-medium">{item}</a>
    </li>
  );
};

const nav = ["Product", "Features", "Pricing", "Company", "Blog"];

export default function MobileNav(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <NavButton fnc={toggle} isOpen={isOpen} />
      {isOpen && (
        <div>
          <nav>
            <ul className="py-[16px]">
              {nav.map((item, i) => (
                <NavLink key={i} item={item} />
              ))}
            </ul>
          </nav>
          <button className="bg-prime text-white font-satoshi font-medium py-[8px] text-center w-full rounded-[4px]" aria-label="GetSarted">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}