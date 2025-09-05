import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
  return (
    <header className="flex justify-between items-center">
      <span className="flex gap-[8px] items-center">
        <img src={logo} alt="Nextly Logo" className="w-[32px]" />
          <p className="text-2xl text-secondary font-satoshi font-bold">Nextly</p>
      </span>
      <button aria-label="Open Navigation" className="w-[40px] h-[32px]">
        <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#202937"}} />
      </button>
    </header>
  );
}