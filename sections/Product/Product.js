import CardComponent from "../../components/Card";

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
                CardTitle={product.title}
                CardBrand={product.brand}
                CardText={product.description}
                stars={true}
                starsNumber={product.rating}
                Price={product.price}
                buttonStyles={"text-center fw-bold"}
                isProduct={true}
                CardButtonText={`Details of ${product.title}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
