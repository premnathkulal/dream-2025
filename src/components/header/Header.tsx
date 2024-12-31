import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import BrandLogo from "../../assets/react.svg";
import { useState } from "react";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="header">
      <FontAwesomeIcon icon={faList} className="menu-icon" />
      <div className="brand-logo">
        <img src={BrandLogo} alt="brand-logo" className="brand-logo-img" />
      </div>
      <div className="brand-name">Shenoy Enterprises</div>
      <div
        className="auth-logo"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <FontAwesomeIcon icon={faUser} className="auth-logo-icon" />
        {isDropdownVisible && (
          <div className="dropdown">
            <div className="dropdown-item">Logout</div>
            <FontAwesomeIcon icon={faSignOut} className="auth-action-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
