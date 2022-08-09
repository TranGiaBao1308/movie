// rafce
import { getMovieList } from "apis/movie-management.apis";
import BannerComponent from "components/Banner/Banner.component";
import Footer from "components/Footer/Footer";
import Spinner from "components/Spinner/Spinner";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSpinnerStart, setSpinnerEnd } from "store/actions/spinner.actions";
import "./Home.styles.scss";
import MovieItemComponent from "./MovieItem/MovieItem.component";
import MovieTabs from "./MovieTabs/MovieTabs";
const HomePage = () => {
  let dispatch = useDispatch();
  let [dataMovies, setDataMoives] = useState([]);
  useEffect(() => {
    dispatch(setSpinnerStart());
    const fetchData = async () => {
      try {
        let result = await getMovieList();
        console.log(result);
        setDataMoives(result.content);
        dispatch(setSpinnerEnd());
      } catch (error) {
        dispatch(setSpinnerEnd());
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Spinner />
      <div>
        <BannerComponent />
      </div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-4 gap-4">
          {dataMovies.map((movie) => (
            <MovieItemComponent movie={movie} />
          ))}
        </div>
      </div>
      <MovieTabs></MovieTabs>
      <Footer />
    </div>
  );
};

export default HomePage;
