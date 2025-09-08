import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const data = [
  faTwitter, faFacebook, faInstagram, faLinkedin
];

export default function Social(){
  return (
    <div className="flex gap-[16px]">
      {data.map((item, i) => (
        <FontAwesomeIcon key={i} icon={item} className="text-slate-gray/70 w-[26px] h-[26px]" />
      ))}
    </div>
  );
}