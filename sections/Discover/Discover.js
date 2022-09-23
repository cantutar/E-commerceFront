import DiscoverSlide from "../../components/Discover-slide";

export default function Discover(props) {
  return (
    <div className="pt-3">
      <DiscoverSlide productData={props.data} />
    </div>
  );
}
