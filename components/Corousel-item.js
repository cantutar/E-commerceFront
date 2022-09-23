import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Image1 from "../public/assets/Images/1.jpg";

export default function SlideItem(props) {
  return (
    <>
      {/* <Carousel.Item>
        <div className="d-block w-100 h-100">
          <Image src={props.Image} alt={props.ImageAlt} layout="responsive" />
        </div>
        <Carousel.Caption>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <div className="d-block w-100 h-100">
          <Image src={Image1} alt={"First Item"} layout="responsive" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
}
