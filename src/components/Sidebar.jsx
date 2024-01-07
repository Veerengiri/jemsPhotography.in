import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "../styles/Sidebar.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";import DoNotDisturbAltOutlinedIcon from "@mui/icons-material/DoNotDisturbAltOutlined";import BookOutlinedIcon from "@mui/icons-material/BookOutlined";import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";import Groups2Icon from "@mui/icons-material/Groups2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
const Sidebar = () => {
    const [isCollapsedSidebar, setisCollapsedSidebar] = useState(false);

    const toggleSidebarCollapseHandler = () => {
      setisCollapsedSidebar((prev) => !prev);
      console.log(isCollapsedSidebar);
    };

  return (
    <>
      <aside data-collapse={isCollapsedSidebar}>
        <div id="side_nav">
          <div id="side_header" className="rw">
            <span className="sidebar_nav_txt">
              <div className="logo">
                <span id="org">Jems</span>
            
                <span className="">Studio</span>
              </div>
            </span>
            <button
              className="toggle gray toggle_btn"
              onClick={toggleSidebarCollapseHandler}
            >
              <MenuOpenIcon />
            </button>
          </div>
          <div id="nav_links">
            <div id="link">
              <Link to="/Dashboard">
                <span>
                  <DashboardOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">dashboard</b>
              </Link>
             
              <Link to="/">
                <span>
                  <ShoppingCartOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">personal shopper</b>
              </Link>
              <Link to="/">
                <span>
                  <LockClockOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">locker</b>
              </Link>
              <Link to="/">
                <span>
                  <FlightTakeoffOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">curiour shipment</b>
              </Link>
              <Link to="/">
                <span>
                  <StoreMallDirectoryOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">indian shops</b>
              </Link>
              <Link to="/">
                <span>
                  <DiscountOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">coupons available</b>
              </Link>
              <small className="sidebar_nav_txt">Help</small>
              <Link to="/">
                <span>
                  <DoNotDisturbAltOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt"> prohibited items</b>
              </Link>
              <Link to="/">
                <span>
                  <BookOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt"> country guide </b>
              </Link>
              <Link to="/">
                <span>
                  <CalculateOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">shipping calc</b>
              </Link>
              <Link to="/">
                <span>
                  <StickyNote2OutlinedIcon />
                </span>
                <b className="sidebar_nav_txt"> new blogs</b>
              </Link>
              <small className="sidebar_nav_txt">your stuff</small>
              <Link to="/">
                <span>
                  <Groups2Icon/>
                </span>
                <b className="sidebar_nav_txt"> refer and earn</b>
              </Link>
              <Link to="/">
                <span>
                  <AccountCircleIcon/>
                </span>
                <b className="sidebar_nav_txt"> profile</b>
              </Link>
              <Link to="/">
                <span>
                  <AccountBalanceWalletIcon/>
                </span>
                <b className="sidebar_nav_txt"> wallet</b>
              </Link>
              <Link to="/">
                <span>
                  <ArticleOutlinedIcon/>
                </span>
                <b className="sidebar_nav_txt"> documents</b>
              </Link>
       
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;