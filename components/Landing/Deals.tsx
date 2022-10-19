import CardItem from "../CardItem";

function Deals() {
  return (
    <>
      <div className="w-full h-3/4 mt-20 mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold uppercase ml-9">
          Today&apos;s best deal
        </h1>
        <div className="grid grid-flow-row-dense gap-4 container mx-auto mt-6">
          <CardItem classes="col-span-2" />
          <CardItem classes="" />
          <CardItem classes="" />
          <CardItem classes="" />
          <CardItem classes="" />
        </div>
      </div>
    </>
  );
}
export default Deals;
