// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuCloseImg from "/assets/shared/icon-close.svg";
import menuOpenImg from "/assets/shared/icon-hamburger.svg";
import logo from "/assets/shared/logo.svg";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const showOrCloseMenubar = () => {
		setShowMenu(!showMenu);
	};

	const menuItems = (
		<>
			<li>
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						`navlink ${isActive && "active-navlink"}`
					}
				>
					<span>00</span>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/destination"}
					className={({ isActive }) =>
						`navlink ${isActive && "active-navlink"}`
					}
				>
					<span>01</span>
					Destination
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/crew"}
					className={({ isActive }) =>
						`navlink ${isActive && "active-navlink"}`
					}
				>
					<span>02</span>
					Crew
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/technology"}
					className={({ isActive }) =>
						`navlink ${isActive && "active-navlink"}`
					}
				>
					<span>03</span>
					Technology
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar">
			<div className="logo-container">
				<img className="logo" src={logo} alt="logo image" />
			</div>
			<ul className="menubar">{menuItems}</ul>
			<div className="mobile-menubar-container">
				<button
					className={`show-mobile-menubar ${showMenu && "hide"}`}
					onClick={showOrCloseMenubar}
				>
					<img src={menuOpenImg} alt="menu open image" />
				</button>

				<div
					className={`mobile-menubar ${
						showMenu && "active-mobile-menubar"
					}`}
				>
					<button
						className={`close-mobile-menubar ${
							showMenu && "active"
						}`}
						onClick={showOrCloseMenubar}
					>
						<img src={menuCloseImg} alt="menu close image" />
					</button>
					<ul className="mobile-menu">{menuItems}</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
