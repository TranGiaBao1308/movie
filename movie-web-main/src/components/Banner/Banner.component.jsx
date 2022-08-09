// rce
import React, { Component } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import apis from "apis";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import {
  fetchBannerListAsyncAction,
  setBannerListAction,
} from "store/actions/movie.actions";

function PrevArrow(props) {
  return (
    <div
      className="absolute top-1/2 translate-y-[-50%] left-3 z-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
      onClick={props.onClick}
    >
      <ArrowBackIosNewIcon />
    </div>
  );
}

function NextArrow(props) {
  return (
    <div
      className="absolute top-1/2 translate-y-[-50%] right-3 z-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
      onClick={props.onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
}

export class BannerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.bannerList.map((banner, index) => (
            <div className="w-full h-[100vh]" key={index}>
              <img
                className="w-full h-full object-cover"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  async componentDidMount() {
    this.props.setupBannerList();
  }
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.movie.bannerList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setupBannerList: () => {
      dispatch(fetchBannerListAsyncAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerComponent);
