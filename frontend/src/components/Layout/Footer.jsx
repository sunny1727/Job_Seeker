import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Sunny_Singh.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100016973175730&mibextid=ZbWKwL"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://youtube.com/@sunnysingh-rh8ks?si=X_dELX8CsDZUR5C6"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/sunny-singh-639654285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/sunny_singh_17_27?igsh=ajcwdWZoaWR4YXg4&utm_source=ig_contact_invite"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;