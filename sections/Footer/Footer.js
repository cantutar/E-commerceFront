import {
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
  FaPinterestSquare,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer(props) {
  return (
    <section className="pt-5">
      <footer className="bg-dark pt-3 text-white text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex justify-content-around align-items-center">
              <div className="col-3">
                <h6>Önemli bir başlık</h6>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
              <div className="col-3">
                <h6>Önemli bir başlık</h6>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
              <div className="col-3">
                <h6>Önemli bir başlık</h6>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
              <div className="col-3">
                <h6>Önemli bir başlık</h6>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="socials ms-auto col-4 d-flex justify-content-evenly">
                <FaLinkedin title={"Linkendin Icon"} size={"2.5em"} />
                <FaFacebook title={"Facebook Icon"} size={"2.5em"} />
                <FaInstagramSquare title={"Instagram Icon"} size={"2.5em"} />
                <FaPinterestSquare title={"Instagram Icon"} size={"2.5em"} />
                <FaTiktok title={"Instagram Icon"} size={"2.5em"} />
                <FaYoutube title={"Instagram Icon"} size={"2.5em"} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
