import "./fair.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { publicRequest } from "./../../requestMethods";
import { useState, useEffect } from "react";

const Fair = () => {
  const [fair, setFair] = useState([]);

  useEffect(() => {
    const getFair = async () => {
      try {
        const res = await publicRequest.get("/fairs");
        setFair(res.data);
      } catch {}
    };
    getFair();
  }, []);

  return (
    <div>
      <Banner />
      <Navbar />
      <div className="fair">
        <div className="fair-wrapper">
          <h4>We invite you to visit our Christmars markets and fairs!</h4>
          {fair.map((item) => (
            <div className="fair-list" key={item._id}>
              <h3>{item.title}</h3>
              <div className="fair-item">
                <span>Date:</span> {item.date}
              </div>
              <div className="fair-item">
                <span>Address:</span> {item.address}
              </div>
              <div className="fair-item">
                <span>Admission fee:</span> ${item.fee}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fair;
