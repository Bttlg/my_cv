import React from "react";
import ReactDom from "react-dom";
import "./Body.css";

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="row-1">
        <div>
          <p className="area">AREAS OF EXPERTISE</p>
          <ul>
            <li>
              Coding language: <br /> Javascript, C++
            </li>
            <li>React болон React native суурь мэдлэгтэй.</li>
            <li>Git дунд шатны мэдлэгтэй.</li>
          </ul>
          <p className="area">OTHER SKILLS</p>
          <ul>
            <li>10 хуруугаар алдаагүй шивнэ.</li>
            <li>Алдааг олж илрүүлэх чадвартай.</li>
            <li>Тууштай</li>
            <li>Багаар ажиллах чадвартай.</li>
            <li>Өөрийгөө хөгжүүлэх хүсэл эрмэлзэлтэй.</li>
            <li>Цаг сайн баримталдаг.</li>
          </ul>
        </div>
      </div>
      <div className="row-2">
        <p className="contact">GET IN CONTACT</p>
        <span className="mobile">Утас: +97694201427 </span>
        <br />
        <span className="email">Email: btjrglbttlg@gmail.com</span>
        <p className="address">
          Хаяг: Дорноговь аймаг, Сайншанд 5-р баг Зүүнбаян, ТЗ гудамж,
          3-3-14тоот
        </p>
        <div className="historyContainer">
          <div>
            <p className="schoolHistory">EDUCATION HISTORY</p>
            <p className="nameSchool">Зүүнбаян ЕБС</p>
            <ul className="history">
              <li>
                2008 онд элсэн ороод 2019 онд ахлах ангиа амжилттай төгссөн.
              </li>
              <li>
                Нийгмийн идэвхтэй бөгөөд маш олон(Сайн үйлсийн аян, хичээлүүдийн
                олимпиад, урлаг, спорт) уралдаан тэмцээн болон үйл ажиллагаанд
                оролцож байсан.
              </li>
              <li>
                2019 онд аймгийн физикийн олимпиадад түрүүлж улсын физикийн 32-р
                олимпиадад амжилттай оролцсон.
              </li>
              <li>
                Сургуулийнхаа шилдэг болон аймгийн тэргүүний сурагчаар тодорсон.
              </li>
            </ul>
          </div>
          <div>
            <p className="universityName">МОНГОЛ УЛСЫН ИХ СУРГУУЛЬ</p>
            <ul className="history">
              <li>
                2019 онд элссэн бөгөөд одоогоор МУИС-ХШУИС-Мэдээллийн
                технологийн 3-р түвшний оюутан болж суралцаж байна.
              </li>
              <li>
                Салбар сургуулийнхаа оюутны зөвлөлийн идэвхтэй гишүүн байсан.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
