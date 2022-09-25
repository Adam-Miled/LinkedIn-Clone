import React from "react";
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt="Linkedin Logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">

<HeaderOption Icon={HomeIcon} title='Home'/>
<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
<HeaderOption Icon={ChatIcon} title='Messaging' />
<HeaderOption Icon={NotificationsIcon} title='Notifications' />
<HeaderOption avatar="https://pbs.twimg.com/profile_images/1198671930821414917/Qd1Zjlsf_400x400.jpg" title="me" />

      </div>
    </div>
  );
}

export default Header;
