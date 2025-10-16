import logo from "../assets/fa.webp";
import {FaLinkedin, FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
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
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/shaikFayazuddin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/fayazuddin_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="x"
          className="hover:text-sky-500 transition-colors"
        >
          <FaSquareXTwitter />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
