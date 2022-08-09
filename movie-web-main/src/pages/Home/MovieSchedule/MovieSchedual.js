import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export default function MovieSchedual({ phim }) {
  

  return (
    <div className="flex h-40 border-b p-2 space-x-3">
      <img className=" h-full w-28 object-cover" src={phim.hinhAnh} alt="" />

      <div>
        <p className="text-xl font-semibold">
          <span className="bg-red-500 rounded text-white px-1">C18</span>{" "}
          {phim.tenPhim}
        </p>
        <div className=" grid grid-cols-3 gap-5 ">
          {phim.lstLichChieuTheoPhim.map(
            (item, index) =>
              index < 6 && (
                <Link key={index} to={`/checkout/${item.maLichChieu}`}>
                  <p
                    className=" bg-white border-2  p-1 rounded"
                  
                  >
                    {" "}
                    <span className="text-red-500 font-semibold">
                      {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY ")}
                    </span>
                    ~
                    <span className="text-green-500 font-semibold">
                      {moment(item.ngayChieuGioChieu).format(" HH:mm")}
                    </span>
                    {/* {moment(item.ngayChieuGioChieu).format("DDMM/YYYY  ~  HH:mm")} */}
                  </p>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
}
