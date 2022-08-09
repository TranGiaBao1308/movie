import React from "react";
import _ from "lodash";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <footer
      className="bg-slate-900 h-64 
    "
    >
      <div
        className="container mx-auto"
        style={{
          width: 1020,
          minHeight: "20vh",
          backgroundColor: "transparent",
        }}
      >
        <div className="grid grid-cols-3 pt-3">
          <div>
            <h5 className="grid grid-cols-4 text-white">TIX</h5>
            <div className="grid grid-cols-2 pr-2">
              <a href="#">FAQ</a>
              <a href="#">chính sách sử dụng</a>
              <a href="#">Brand Guidelines</a>
              <a href="#">Chính sách bảo mật</a>
            </div>
          </div>
          <div className="cursor-pointer">
            <h5 onChange={handleChange} className="text-white ">
              {t("partner")}
            </h5>
            <div className="flex items-center justify-between ">
              <img
                className="rounded w-10"
                src="bhd-star-cineplex.png"
                alt=""
              />
              <img className="rounded w-10" src="cgv.png" alt="" />
              <img className="rounded w-10" src="cinestar.png" alt="" />
            </div>
            <div className="flex items-center justify-between mt-5">
              <img className="rounded w-10" src="galaxy-cinema.png" alt="" />
              <img className="rounded w-10" src="lotte-cinema.png" alt="" />
              <img className="rounded w-10" src="megags.png" alt="" />
            </div>
            <div className="flex items-center justify-between mt-5">
              <img className="rounded w-10" src="zalo.png" alt="" />
              <img className="rounded w-10" src="vcb.png" alt="" />
              <img className="rounded w-10" src="vcb.png" alt="" />
              
            </div>
          </div>
          <div className="flex justify-around items-start">
            <div>
              <h5 className="text-white">MOBILE APP</h5>
              <a
                href="#"
                className="flex items-center justify-between space-x-3"
              >
                <img className="w-10" src="android.png" alt="" />
                <img className="w-10" src="ios.png" alt="" />
              </a>
            </div>
            <div>
              <h5 className="text-white">SOCIAL</h5>
              <a href="">
                <img className="w-10" src="fb.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
