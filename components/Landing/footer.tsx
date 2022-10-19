import { IoLogoFacebook } from "react-icons/Io";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const footerContent = [
  {
    title: "About Us",
    content: [
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
    ],
  },
  {
    title: "About Us",
    content: [
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
    ],
  },
  {
    title: "About Us",
    content: [
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
      "dsafasdfda",
    ],
  },
];

function Footer() {
  return (
    <>
      <div className="bg-footer w-full h-auto">
        <div className="flex justify-around items-center text-white">
          <div className="flex flex-col justify-between">
            <h1 className="text-3xl">CompanyLogo</h1>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              fugiat.
            </p>
          </div>
          <>
            {footerContent.map((links, index) => {
              return (
                <>
                  <div
                    className="flex flex-col font-semibold items-center"
                    key={index}
                  >
                    <h1 className="text-2xl font-bold">{links.title}</h1>
                    {links.content.map((content) => {
                      return <p key={index}>{content}</p>;
                    })}
                  </div>
                </>
              );
            })}
          </>
        </div>
        <div className="flex justify-end items-center mx-6 py-3">
          <IoLogoFacebook className="text-white h-8 w-8 rounded hover:text-facebook" />
          <AiOutlineTwitter className="text-white h-8 w-8 rounded hover:text-twitter" />
          <AiFillLinkedin className="text-white h-8 w-8 rounded hover:text-linkedin" />
          <AiFillYoutube className="text-white h-8 w-8 rounded hover:text-youtube" />
          <AiFillInstagram className="text-white h-8 w-8 rounded hover:text-instagram" />
        </div>
      </div>
      <div className="bg-black text-white w-full py-6 flex justify-center items-center">
        <span>Can Tutar - 2022</span>
      </div>
    </>
  );
}
export default Footer;
