import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { datVeAction, TicketAction } from "store/actions/ticket.actions";
import { SET_USER_INFOR } from "store/constants/user.constants";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "store/constants/ticket.constants";
import { sortBy } from "lodash";
import ThongTinDatVe from "_core/models/ThongTinDatVe";
import { Tabs } from "antd";
import { layThongTinNguoiDungAction } from "store/actions/user.action";
import moment from "moment";
// import App from "App";

function CheckoutPage(props) {
  let navigate = useNavigate();
  // const { chiTietPhongVe } = useSelector((state) => state.TicketReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.ticket
  );

  let { id } = useParams();
  console.log("chiTietPhongVe", chiTietPhongVe);
  console.log("danhSachGheDangDat", danhSachGheDangDat);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      console.log(id);
      const action = await TicketAction(id);
      dispatch(action);
    })();
  }, []);
  let { userInfor, thongTinNguoiDung } = useSelector((state) => state.user);
  useEffect(() => {
    if (localStorage.getItem(SET_USER_INFOR) == null) {
      return navigate("/login");
    }
  }, []); // chỗ này đúng ko ạ

  const renderSeat = () => {
    return (
      chiTietPhongVe.danhSachGhe &&
      chiTietPhongVe.danhSachGhe.map((ghe, index) => {
        let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
        let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
        // kiểm tra từng ghế xem có ghế đang đặt hay ko
        let classGheDangDat = "";
        let classGheDaDuocDat = "";
        let taiKhoanDatve = userInfor.taiKhoan;
        //console.log("Người dùng ",userInfor);
        if (taiKhoanDatve == ghe.taiKhoanNguoiDat) {
          classGheDaDuocDat = "gheDaDuocDat";
        } else classGheDaDuocDat = "ghe";
        let indexGheDD = danhSachGheDangDat.findIndex(
          (gheDD) => gheDD.maGhe === ghe.maGhe
        );
        if (indexGheDD != -1) {
          classGheDangDat = "gheDangDat";
        }
        return (
          <Fragment>
            <button
              onClick={() => {
                dispatch({
                  type: DAT_VE,
                  gheDuocChon: ghe,
                });
                console.log(ghe);
              }}
              disabled={ghe.daDat}
              className={`ghe ${classGheDangDat} ${classGheVip} ${classGheDaDat} ${classGheDaDuocDat}`}
              key={index}
            >
              {ghe.daDat ? <CloseOutlined /> : ghe.stt}
            </button>
            {(index + 1) % 16 === 0 ? <br /> : ""}
          </Fragment>
        );
      })
    );
  };

  return (
    <div className="container min-h-screen ">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className="trapezoid">
              <h3
                className="mt-3 text-red-800 font-extrabold text-center
800"
              >
                Màn hình
              </h3>
            </div>
            <div>{renderSeat()}</div>
          </div>

          <div className="mt-5 flex justify-center">
            <table className=" divide-y divide-gray-200 w-2/3">
              <thead className="p-5">
                <tr>
                  <th>Ghế Chưa Đặt</th>
                  <th>Ghế Đang Đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế mình đặt</th>
                  <th>Ghế đã đặt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ml-16">
                <tr>
                  <td className="pl-10">
                    <button className="ghe text-center"></button>
                  </td>
                  <td className="pl-10">
                    <button className=" ghe gheDangDat text-center"></button>
                  </td>
                  <td className="pl-10">
                    <button className=" ghe gheVip text-center"></button>
                  </td>
                  <td className="pl-10">
                    <button className="ghe gheDaDuocDat text-center"></button>
                  </td>
                  <td className="pl-10">
                    <button className="ghe gheDaDat text-center"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-3 ">
          <h3 className="text-green-500 text-center text-2xl mt-2">
            {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
              return (tongTien += ghe.giaVe);
            }, 0)}{" "}
            đ
          </h3>

          <hr />

          <h3 className="text-xl">{chiTietPhongVe.thongTinPhim?.tenPhim} </h3>
          <p>{chiTietPhongVe.thongTinPhim?.diaChi}</p>
          <p>
            {chiTietPhongVe.thongTinPhim?.ngayChieu} -{" "}
            {chiTietPhongVe.thongTinPhim?.gioChieu}
            {chiTietPhongVe.thongTinPhim?.tenRap}
          </p>
          <hr />
          <div className="grid grid-cols-2 my-5">
            <div>
              <span className="text-red-500 text-lg ">Ghế</span>
              {sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                return (
                  <span className="text-green-500 text-xl p-2" key={index}>
                    {gheDD.stt}
                    {(index + 1) % 4 === 0 ? <br /> : ""}
                  </span>
                );
              })}
            </div>
            <div className="text-right px-6">
              <span className="text-green-500 text-lg">
                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)}
                đ
              </span>
            </div>
          </div>
          <hr />
          <div className=" h-full flex flex-col justify-center items-center">
            <div
              className="bg-green-500  text-white w-full text-center py-3 text-xl cursor-pointer"
              onClick={() => {
                let idLichChieu = chiTietPhongVe.thongTinPhim.maLichChieu;
                const thongTinDatVe = new ThongTinDatVe(idLichChieu);
                thongTinDatVe.danhSachVe = [...danhSachGheDangDat];
                console.log("thongTinDatVe", thongTinDatVe);
                dispatch(datVeAction(thongTinDatVe));
              }}
            >
              Đặt vé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;
const onChange = (key) => {
  console.log(key);
};

const App = (props) => {
  return (
    <div className="p-5">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="1.Chọn Ghế và Thanh Toán" key="1">
          <CheckoutPage {...props} />
        </TabPane>
        <TabPane tab="2.Kết quả đặt vé" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;

export const KetQuaDatVe = (props) => {
  let { thongTinNguoiDung } = useSelector((state) => state.user);
  console.log("ThongTinNguoiDung", thongTinNguoiDung);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const action = await layThongTinNguoiDungAction();
      dispatch(action);
    })();
  }, []);
  const renderTicketItem = () => {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full  border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                {moment(ticket.ngayDat).format("hh:mm A ") -
                  moment(ticket.ngayDat).format("Ngày chiếu: DD-MM-YYYY ")}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-500">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Vui lòng kiểm tra lại thông tin
            </p>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
};
