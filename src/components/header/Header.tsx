import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import BrandLogo from "../../assets/react.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/app-store";
import { toggleDrawerMenu } from "../../store/slices/ui-controls";

const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const isDrawerMenuOpen =
    useSelector<RootState>((state) => state.uiControls.isDrawerMenuOpen) ??
    false;

  return (
    <div className="header">
      <FontAwesomeIcon
        icon={faList}
        className="menu-icon"
        onClick={() => {
          dispatch(toggleDrawerMenu(!isDrawerMenuOpen));
        }}
      />
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
