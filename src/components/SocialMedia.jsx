import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className=" flex gap-3 pb-4 ">
      <Link to="/">
        {" "}
        <FontAwesomeIcon icon={faGithub} size="2xl" className=" text-[#592DD1] " />
      </Link>
      <Link to="/">
        {" "}
        <FontAwesomeIcon icon={faLinkedin} size="2xl" className=" text-[#592DD1] " />
      </Link>
      <Link to="/">
        {" "}
        <FontAwesomeIcon icon={faFacebook} size="2xl" className=" text-[#592DD1] " />
      </Link>
      <Link to="/">
        {" "}
        <FontAwesomeIcon icon={faInstagram} size="2xl" className=" text-[#592DD1] " />
      </Link>
    </div>
  );
};

export default SocialMedia;
