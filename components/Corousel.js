import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../public/assets/images/1.jpg";

function Caro(props) {
  const { productData } = props;
  return (
    <Carousel>
      {productData.products.map((product) => {
        return (
          <Carousel.Item key={product.id}>
            <div className="d-block w-100 h-100">
              <Image
                src={product.thumbnail}
                alt={"First Item"}
                width={1920}
                height={800}
                layout="responsive"
              />
            </div>
            <Carousel.Caption>
              <h2>{product.brand}</h2>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{`price: ${product.price}$`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Caro;
