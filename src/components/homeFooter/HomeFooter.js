import React, { Component } from 'react';
import "./StyleHomeFooter.css";
import item1 from "./pic_tures/item1.jpg";
import item2 from "./pic_tures/item2.jpg";


class HomeFooter extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main_container">

          <div className="item">
            <h1>Welcome to the Admin page</h1>
          </div>

          <div className="item">
            <div className="img_holder">
              <img src={item1} aria-hidden alt="Nice" />
            </div>
            <div className="item_info">
              Trời chiều Tây Bắc với những mảng màu đa sắc là sự pha trộn hoàn hảo đến từ bàn
              tay của mẹ thiên nhiên kết hợp cùng bức tranh thổ cẩm khổng lồ của những thửa 
              ruộng bậc thang xanh mướt từ lâu đã trở thành cảnh tượng mê đắm lòng người. 
              Đây là nét duyên dáng đặc biệt ở những khu vực núi phía Bắc của Việt Nam khiến
              bất cứ ai từng ngắm nhìn không tránh khỏi sự mê đắm.
              <hr/>
              The Northwest afternoon sky with colorful patches is the perfect blend of mother
              nature's hand combined with the giant brocade painting of green terraced fields 
              that has long become a mesmerizing sight. hearts. This is a special charm in the 
              mountainous areas of the North of Vietnam that makes anyone who has seen it inevitably
              infatuation.
            </div>
          </div>

          <div className="item">
            <div className ="img_holder">
              <img src={item2} aria-hidden alt="Nice" />
            </div>
            <div className="item_info">
              Đi các huyện, thành phố trên địa bàn tỉnh đâu đâu cũng có thể bắt gặp những
              ngôi nhà sàn truyền thống của đồng bào Tày, Nùng, Dao, Cao Lan... 
              Từ xa xưa đồng bào các dân tộc trong tỉnh, kể cả người Kinh dưới xuôi lên
              đều “kết” kiến trúc của ngôi nhà sàn. Bởi nó phù hợp với phong tục, tập
              quán, văn hóa, địa hình, lối sinh hoạt của người dân địa phương.
              Hơn nữa vật liệu làm nhà sàn bằng gỗ, lá rất gần gũi, giản dị, 
              dễ kiếm, dễ làm, chi phí thấp, ấm áp về mùa đông, mát mẻ về mùa hè.
              <hr/>
              Going to districts and cities in the province, everywhere you can see the
              traditional stilt houses of Tay, Nung, Dao, and Cao Lan people ...
              Since ancient times, ethnic minorities in the province, including Kinh 
              people down and down are "tied" to the architecture of the house on stilts.
              Because it is consistent with the customs, customs, culture, terrain,
              and lifestyle of the local people. Moreover, the materials for making
              wooden and leaf stilts are very close, simple, easy to find, easy to make,
              low cost, warm in winter, cool in summer.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeFooter;
