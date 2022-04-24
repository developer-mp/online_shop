import "./carousel.css";
import { carouselItems } from "./carouselItems";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

const CarouselSlider = () => {
  return (
    <Carousel indicators={false} prevIcon nextIcon className="carousel">
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id} className="carousel-item">
          <img className="d-block w-100" src={item.img} alt="" />
          <h3>{item.title}</h3>
          <ArrowBackIosOutlined className="carousel-arrow-prev" />
          <ArrowForwardIosOutlined className="carousel-arrow-next" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
