import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full">
      <nav className="flex flex-col sm:justify-between items-center px-8 py-4">
        <a href="/">
          <p className="text-3xl font-bold text-[#592DD1] mb-0">
            ELK
            <span className="text-white uppercase">
              ythn<span className="text-[#592DD1]">.</span>
            </span>
          </p>
        </a>
        <div className=" sm:hidden pt-2 ">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>
        </div>
        <div className={`sm:flex ${showMenu ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center sm:flex-row gap-4">
            <li className={`font-bold px-6 py-3 rounded-sm hover:text-[#592DD1] border-b-2 border-[#592DD1] cursor-pointer transition-colors ${location.pathname === '/' ? 'text-[#592DD1] border-[#592DD1]' : ''}`}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={`font-bold px-6 py-3 rounded-sm hover:text-[#592DD1] border-b-2 border-[#592DD1] cursor-pointer transition-colors ${location.pathname === '/skill' ? 'text-[#592DD1] border-[#592DD1]' : ''}`}>
              <Link to="/skill">Tecnologias</Link>
            </li>
            <li className={`font-bold px-6 py-3 rounded-sm hover:text-[#592DD1] border-b-2 border-[#592DD1] cursor-pointer transition-colors ${location.pathname === '/projects' ? 'text-[#592DD1] border-[#592DD1]' : ''}`}>
              <Link to="/projects">Proyectos</Link>
            </li>
            <li className={`font-bold px-6 py-3 rounded-sm hover:text-[#592DD1] border-b-2 border-[#592DD1] cursor-pointer transition-colors ${location.pathname === '/about' ? 'text-[#592DD1] border-[#592DD1]' : ''}`}>
              <Link to="/about">Acerca</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
