import { userLocalService } from "localService/localService";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SET_USER_INFOR } from "store/constants/user.constants";
import { useTranslation } from "react-i18next";
export default function UserNavComponent() {
  let { userInfor } = useSelector((state) => state.user);
  let dispatch = useDispatch();

  let handleLogout = () => {
    dispatch({
      type: SET_USER_INFOR,
      payload: null,
    });

    userLocalService.removeUserInfor();
  };
  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <div>
      {userInfor ? (
        <div className="flex items-center space-x-5">
          <p className="text-red-600 text-lg font-medium m-0">
            {userInfor.hoTen}
          </p>

          <button
            onClick={handleLogout}
            className="bg-black text-white p-3 rounded"
            onChange={handleChange}
          >
            {t("log out")}
          </button>
        </div>
      ) : (
        <div className="header__auth" >
          <Link to="/login">
            <button onChange={handleChange} className="btn-auth"> {t("sign in")}</button>
          </Link>
          <Link to="/register">
            <button onChange={handleChange} className="btn-auth"> {t("sign up")}</button>
          </Link>
        </div>
      )}
    </div>
  );
}
