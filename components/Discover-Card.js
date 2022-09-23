import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { Loader, toBase64 } from "../helpers/Placeholder";
import classes from "./Card.module.scss";

export default function DiscoverCard(props) {
  return (
    <>
      <div className={`shadow-sm text-center ${classes.CardBg}`}>
        <div className="col-12 d-flex flex-sm-column flex-md-column flex-xxl-row  justify-content-center align-items-center">
          <div className="col-sm-9 col-md-9 col-xxl-6 ">
            <div className="image-fluid">
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
          </div>
          <div className="col-sm-3 col-md-3 col-xxl-6 d-flex flex-column justify-content-between py-5 align-content-center">
            <h6 className="">{props.CardBrand}</h6>
            <h5 className="">{props.CardTitle}</h5>
            {props.Category && <p>{props.Category}</p>}
            <div
              className={`d-flex justify-content-center align-items-center ${classes.Cardheight}`}
            >
              {props.stars &&
                Array.from({ length: props.starsNumber }, (_, i) => (
                  <AiFillStar color="orange" key={i} />
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
      </div>
    </>
  );
}
