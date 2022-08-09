import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import UserNavComponent from "./UserNav.component";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

const HeaderComponent = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const { Option } = Select;
  return (
    <div className="header shadow">
      <div className="header__wrap">
        <div className="header__logo">
          <Link to="/">
            <img
              src="https://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
              alt=""
            />
          </Link>
        </div>
        <div className="header__nav">
          <nav>
            <ul>
              <li className="home">
                <Link to="/">{t("home page")}</Link>
              </li>
              <li className="about">
                <Link to="/about">{t("about page")}</Link>
              </li>
              <li className="contact">
                <Link to="/Contact">{t("contact")}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Select
          defaultValue="en"
          style={{
            width: 120,
          }}
          onChange={handleChange}
        >
          <Option value="en">Eng</Option>
          <Option value="vi">Vi</Option>
          <Option value="chi">China</Option>
        </Select>
        <UserNavComponent />
      </div>
    </div>
  );
};

export default HeaderComponent;
