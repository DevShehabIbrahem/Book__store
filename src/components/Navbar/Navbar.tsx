import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import MobileMenu from "../mobileMenu/MobileMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { words } from "../../common/words";

import {
  isActiveStyle,
  isNotActiveStyle,
  navNoChange,
} from "../../common/styles";
import CloseMenu, { closeM, MenuChange } from "../../Redux/Reducers/CloseMenu";
import { useTypedSelector } from "../../Redux/store";
import { useAppDispatch } from "../../Redux/hook";
import { BsMinecartLoaded } from "react-icons/bs";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const state = useTypedSelector(closeM);

  return (
    <>
      <div className={navNoChange}>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[65px] mr-4" />
        </Link>
        <div className="flex items-center  gap-20">
          <div className="hidden md:flex items-center text-white space-x-4 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={() => dispatch(MenuChange(false))}
            >
              Home
            </NavLink>
            {words.navlink.map((n) => (
              <NavLink
                to={`${n}`}
                className={({ isActive }) =>
                  isActive ? isActiveStyle : isNotActiveStyle
                }
                key={n}
              >
                {n}
              </NavLink>
            ))}
          </div>
        </div>
        <BsMinecartLoaded fontSize={`2rem`} color={`white`} />

        {/* Mobile-Menu */}
        <span
          className="flex text-[2rem] cursor-pointer text-white md:hidden"
          onClick={() => dispatch(MenuChange(true))}
        >
          <AiOutlineMenu />
        </span>
      </div>
      {state && <MobileMenu />}
    </>
  );
};

export default Navbar;
