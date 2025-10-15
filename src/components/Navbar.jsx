import logo from "../assets/fa.webp";
import {FaLinkedin, FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import CallButton from "./CallButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2" width={50} height={33} />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shaikfayazuddin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/shaikFayazuddin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/fayazuddin_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="x"
        >
          <FaSquareXTwitter />
        </a>

        <a
          href="mailto:shaikfayazuddin18@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <SiGmail />
        </a>

        <CallButton/>
        
      </div>
    </nav>
  );
};

export default Navbar;
