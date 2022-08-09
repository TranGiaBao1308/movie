import { Progress } from "antd";
import { getDetailMovie } from "apis/movie-management.apis";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import ReactPlayer from 'react-player';
export default function DetailPage() {
  // useEffect : hook ( hàm ) gồm 2 tham số ( st1 function, st2 dependencies )
  //  componentDidMount => truyền []
  //  componenDidUpdate => không truyền []

  // const [number, setNumber] = useState(0);
  // const [like, setLike] = useState(0);

  // useEffect(() => {
  //   console.log("one like");
  // }, [like, number]);

  // useEffect(() => {
  //   console.log(" auto run after setState");
  // }, []);
  // console.log("render");

  const [movie, setMovie] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getDetailMovie(id)
      .then((res) => {
        console.log(res.content);

        setMovie(res.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(id);
  return (
    <div
      style={{
        backgroundImage: `url(${movie.hinhAnh})`,
        backgroundSize: "100%",
        minHeight: "100vh",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ minHeight: "100vh" }}
        effectColor="#ffffff" // required
        color="#ffffff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={-1} // default border radius value is 10px
      >

        <div className="container mx-auto  h-40 space-y-10 py-10 "
          style={{ display: "block", backgroundColor: "transparent" }}>
          <div className="h-96 flex items-center justify-between space-x-10">
            <img
              className=" h-full w-1/5 shadow rounded "
              src={movie.hinhAnh}
              alt=""
            />

            <Progress
              type="circle"
              percent={movie.danhGia * 10}
              format={(diem) => `${diem / 10} điểm`}
              width={200}
            />
            <div>
              <ReactPlayer
                url={movie.trailer}
                width="640px"
                height="360px"
                playing={false}
                controls={false}
              />
            </div>
          </div>
          <p className="text-red-500 text-4xl">Tên phim : {movie.tenPhim}</p>
          <p>Giới thiệu bộ phim: {movie.moTa}</p>

        </div>
      </CustomCard>
    </div>
  );
}
