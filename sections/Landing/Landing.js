import Caro from "../../components/Corousel";

export default function Landing(props) {
  return (
    <div className="container-fluid">
      <Caro productData={props.data} />
    </div>
  );
}
