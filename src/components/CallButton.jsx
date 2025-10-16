import { IoMdCall } from "react-icons/io";

const CallButton = () => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) return null; 

  return (
    <a href="tel:+917013938988" aria-label="Call us" className="hover:text-blue-500 transition-colors">
      <IoMdCall/>
    </a>
  );
};

export default CallButton;
