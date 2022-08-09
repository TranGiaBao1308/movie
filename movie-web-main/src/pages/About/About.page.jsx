import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto" style={{ width: 1519 }}>
      <h1 className="text-center text-2xl mt-3">GIỚI THIỆU</h1>
      <div>
        <span className="date">18/07/2017</span>
        <div>
          <p>
            <span style={{ color: "#16a600" }}>
              <strong>BHD Star Cineplex</strong>
            </span>
            &nbsp;được biết đến với cụm rạp đầu tiên với 5 phòng chiếu vào năm
            2010, tại Maximark 3/2 (nay là Vincom 3/2). Từ 2014,&nbsp;
            <strong>BHD Star Cineplex</strong>&nbsp;là cụm rạp của doanh nghiệp
            Việt Nam duy nhất có sức phát triển mạnh mẽ, qua việc liên tục mở
            thêm các vị trí rạp mới, ở những khu vực đắc địa của Thành phố Hồ
            Chí Minh, Hà Nội, Huế và các tỉnh thành khác.
          </p>
          <p>
            <strong>
              <span style={{ color: "#16a600" }}>MỤC TIÊU HOẠT ĐỘNG</span>
              <br />
            </strong>
            <em>
              Các mục tiêu này được thiết lập bởi BHD Star Cineplex như là kim
              chỉ nam cho các Ban Quản Lý Rạp để bảo đảm trải nghiệm điện ảnh
              hoàn hảo cho khách hàng.
              <br />
            </em>
            <br />+<strong>&nbsp;Phục vụ khách hàng:</strong>&nbsp;Chúng tôi cam
            kết chất lượng phục vụ theo tiêu chuẩn cao nhất qua việc thoả mãn
            các yêu cầu của khách hàng kịp thời,đầy đủ và chuyên nghiệp.
          </p>
          <p>
            +&nbsp;<strong>Không gian thoải mái:</strong>&nbsp;Chúng tôi cam kết
            mang đến một không gian sạch sẽ, thoải mái và thuận lợi, để khách
            hàng luôn cảm thấy được trân trọng và được phục vụ chu đáo.
          </p>
          <p>
            +&nbsp;<strong>Địa điểm an toàn:</strong>&nbsp;Chúng tôi cam kết bảo
            đảm một không gian giải trí an ninh và an toàn để khách hàng quay
            lại thường xuyên.
          </p>
          <p>
            +&nbsp;<strong>Âm thanh hình ảnh:</strong>&nbsp;Chúng tôi cam kết
            cung cấp chất lượng âm thanh và hình ảnh theo tiêu chuẩn cao nhằm
            gìn giữ, quảng bá và nâng cao trải nghiệm điện ảnh như chính sự kỳ
            vọng của các nhà làm phim và khán giả xem phim.
          </p>
          <p>
            Bên cạnh việc sẽ tiếp tục mở rộng ra các tỉnh thành khác, giá trị
            cốt lõi của thương hiệu&nbsp;<strong>BHD Star Cineplex</strong>
            &nbsp;là luôn luôn bảo đảm trải nghiệm của khách hàng qua chất lượng
            phục vụ, đồng nhất tại tất cả các cụm rạp.
          </p>
          
        </div>
        <div className="tag--list">
          <i className="fa fa-tags" />
        </div>
        <div className="button--share">
          <a
            href="javascript:fbShare('https://www.bhdstar.vn/ve-chung-toi/', 'Fb Share', 'Facebook share popup', '', 520, 350)"
            className="btn--fb-share"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
