import logo from "../assets/images/logo.svg";
import MobileNav from "./MobileNav";

export default function Header(){
  return (
    <>
      <header className="flex justify-between items-center">
        <span className="flex gap-[8px] items-center">
          <img src={logo} alt="Nextly Logo" className="w-[32px]" />
          <p className="text-2xl text-secondary font-satoshi font-bold">Nextly</p>
        </span>
      </header>
      <MobileNav />
    </>
  );
}