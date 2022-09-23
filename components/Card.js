import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.scss";

export default function CardComponent(props) {
  return (
    <>
      <div className={`card ${styles.CardSpecs} col-md-3 ${props.cardStyles}`}>
        <div className="card-img-top">
          <Image
            src={props.Image}
            alt={"Card image"}
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="card-body">
          {props.Category && <p>{props.Category}</p>}
          <h6 className="card-title">{props.CardBrand}</h6>
          <h5 className="card-title">{props.CardTitle}</h5>
          <p className="card-text">{props.CardText} </p>
          <div className="row">
            {props.CardButtonText && (
              <div className="btn btn-primary col-6">
                <Link href="/">
                  <a className="text-white">{props.CardButtonText}</a>
                </Link>
              </div>
            )}

            {props.Price && (
              <div
                className={
                  props.buttonStyles
                    ? props.buttonStyles
                    : `text-dark fw-bold col-4 ms-auto`
                }
              >{`${props.Price}$`}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
