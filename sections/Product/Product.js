import Link from "next/link";
import CardComponent from "../../components/Card";
import classes from "./Product.module.scss";

export default function Product(props) {
  const { data } = props;
  return (
    <section className="pt-5 container">
      <h1 className="display-1 text-center">Products...</h1>
      <div className="mx-auto">
        <div className="row d-flex">
          {data.map((product) => {
            return (
              <>
                <Link href={`/product/${data.id}`}>
                  <a
                    className={`mx-auto col-md-4 text-decoration-none text-black ${classes.Cardlink}`}
                  >
                    <CardComponent
                      CardLink={product.id}
                      cardStyles={"mx-auto my-2"}
                      key={product.id}
                      Image={product.image}
                      CardTitle={product.title}
                      CardBrand={product.brand}
                      CardText={product.description}
                      stars={true}
                      starsNumber={product.rating}
                      Price={product.price}
                      buttonStyles={"text-center fw-bold"}
                      isProduct={true}
                    />
                  </a>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
