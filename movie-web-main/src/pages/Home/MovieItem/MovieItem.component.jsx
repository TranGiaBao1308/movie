import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const { Meta } = Card;
export default function MovieItemComponent({ movie }) {
  console.log("movie", movie);
  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className="px-4 ">
      <Card
        cover={
          <img
            className=" h-[450px] w-full object-cover"
            alt="example"
            src={movie.hinhAnh}
          />
        }
      >
        <Meta
          title={
            <p className="text-red-500">
              {movie.tenPhim.length > 30
                ? movie.tenPhim.slice(0, 30) + "..."
                : movie.tenPhim}
            </p>
          }
        />
        <button
          className=" bg-red-500   py-2 rounded w-full mt-3 hover:shadow-xl shadow-black "
          onChange={handleChange}
        >
          <Link
            className="text-white w-full h-full block"
            to={`/detail/${movie.maPhim}`}
          >
            {t("detail")}
          </Link>
        </button>
      </Card>
    </div>
  );
}
