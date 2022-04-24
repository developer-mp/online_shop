import "./success.css";
import box_img from "../../assets/img/components/box.png";
import Footer from "../../components/footer/Footer";

const Success = () => {
  function orderNumber() {
    let now = Date.now().toString();
    now += now + Math.floor(Math.random() * 10);
    return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join("-");
  }

  return (
    <div>
      <div className="success">
        <h3>Thank you for shopping with us!</h3>
        <img className="success-img" src={box_img} alt="" />
        <h6>
          Your order has been placed. We will send you a confirmation when your
          order is ready for delivery
        </h6>
        <h6>Your order number is {orderNumber()}</h6>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
