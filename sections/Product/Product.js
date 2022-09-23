import CardComponent from "../../components/Card";
import Image1 from "../../public/assets/images/1.jpg";

export default function Product(props) {
  const { data } = props;
  return (
    <section className="pt-5 container">
      <h1 className="display-1 text-center">Products...</h1>
      <div className="mx-auto">
        <div className="row">
          {data.products.map((product) => {
            return (
              <CardComponent
                cardStyles={"mx-auto my-2"}
                key={product.id}
                Image={product.thumbnail}
                CardTitle={"Card Title"}
                CardText={
                  "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
                Price={product.price}
                buttonStyles={"text-center fw-bold"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
