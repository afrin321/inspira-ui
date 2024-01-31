import React, { useContext } from "react";
import Logo from "./../assets/logo_new.png";
import Menu from "./../assets/burger_menu.png";
import VisibilityContext from "../context/menuVisibleContext";

function Nav() {
  const { isVisible, setIsVisible, menuFlip } = useContext(VisibilityContext);
  return (
    <>
      <div className="bg-nav flex items-center justify-between fixed z-50 w-full px-20 py-4">
        <img src={Logo} className="w-1/5 object-scale-down " />
        <ul className="flex list-none justify-between w-[216px] h-[40px] align-middle items-center p-0 m-0">
          <li className="flex gap-1 items-center text-[#ffffff] text-[30px] leading-[40px] font-bold">
            <span className="hover:underline">EN</span>/
            <span className="hover:underline">SP</span>
          </li>
          <li
            className={`p-0 m-0 ${
              isVisible
                ? "border-black rounded-lg bg-black opacity-50 p-3"
                : "p-3"
            } `}
          >
            <img
              src={Menu}
              className="cursor-pointer"
              onClick={() => setIsVisible((isVisible) => !isVisible)}
            />
          </li>
        </ul>
      </div>
      {/* <nav className={top bg-nav ${menuFlip ? 'h-[100px]' : 'h-[180px]'} h-fit w-full fixed top-0 left-0 z-60 px-[7.5%] flex justify-between items-center align-middle}>
            <img src={Logo} className={${menuFlip ? 'h-[76px] w-[184px]' : 'h-[106px] w-[260px] absolute top-[43px]'} object-scale-down} />
            <ul className={flex list-none justify-between w-[216px] h-[40px] absolute ${menuFlip ? 'top-[37px]' : 'top-[77px]'} right-[250px] align-middle items-center p-0 m-0}>
                <li className={flex gap-1 items-center text-[#ffffff] text-[30px] leading-[40px] font-bold}>
                    <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
                </li>
                <li className={`p-0 m-0 ${isVisible ? 'border-black rounded-lg bg-black opacity-50 p-3' : 'p-3' } `}><img src={Menu} className='cursor-pointer' onClick={() => setIsVisible(isVisible => !isVisible)} /></li>
            </ul>
            
        </nav> */}
    </>
  );
}

export default Nav;
