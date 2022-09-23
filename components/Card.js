import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { Loader, toBase64 } from "../helpers/Placeholder";
import styles from "./Card.module.scss";

export default function CardComponent(props) {
  return (
    <>
      <div className={`card ${styles.CardSpecs} ${props.cardStyles}`}>
        <div className="card-img-top">
          <Image
            src={props.Image}
            alt={"Card image"}
            width={300}
            height={300}
            layout="responsive"
            loading="lazy"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              Loader(180, 280)
            )}`}
          />
        </div>
        <div className="card-body">
          {props.Category && <p>{props.Category}</p>}
          <h6 className="card-title text-center">{props.CardBrand}</h6>
          <h5 className="card-title">{props.CardTitle}</h5>{" "}
          <div className="d-flex justify-content-center align-items-center">
            {props.stars &&
              Array.from({ length: props.starsNumber }, (_, i) => (
                <AiFillStar className="" color="orange" key={i} />
              ))}
          </div>
          <p className="card-text">{props.CardText} </p>
          <div className="row">
            {props.CardButtonText && (
              <div className="btn btn-primary col-6">
                <Link href={`/product/${props.CardLink}`}>
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
