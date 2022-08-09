import { getCinemaSystem } from "apis/movie-management.apis";
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "./movieTab.scss";
import MovieSchedual from "../MovieSchedule/MovieSchedual";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export default function MovieTabs() {
  const [cinema, setCinema] = useState([]);
  useEffect(() => {
    getCinemaSystem()
      .then((res) => {
        console.log(res);
        setCinema(res.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderContentTab = () => {
    return cinema.map((rapPhim, index) => {
      return (

        <TabPane
          tab={<img className="h-16 w-16 object-cover" src={rapPhim.logo} />}
          key={`${index}`}
        >
          <Tabs
            style={{ height: 500 }}
            tabPosition="left"
            defaultActiveKey={"2"}
            onChange={callback}
          >
            {rapPhim.lstCumRap.map((cumRap, index) => {
              // console.log(cumRap);
              return (
                <TabPane
                  tab={
                    <div className=" w-56">
                      <p>{cumRap.tenCumRap}</p>
                      <p className=" whitespace-normal">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index + cumRap.tenCumRap}
                >
                  {/* renderMovieList() */}

                  <div style={{ height: "500px", overflowY: "scroll" }}>
                    {cumRap.danhSachPhim.map((phim, index) => {
                      if (index < 200) return <MovieSchedual phim={phim} />;
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>

      );
    });
    // return <Tab tab={}>

    // </Tab>

  };
  //   console.log(renderContentTab());

  return (
    <div>
     
      <div
        id="movie-tab"
        className="container shadow w-full h-max my-16"
        style={{ width: 1320 }}
      >
        <Tabs
          style={{ height: 500 }}
          tabPosition="left"
          defaultActiveKey={"2"}
          onChange={callback}
        >
          {/* <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane> */}
          {renderContentTab()}
        </Tabs>
      </div>
    </div>
  );
}
