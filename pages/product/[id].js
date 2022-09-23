function Product(props) {
  return (
    <>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Punny headline</h1>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="flex-fill text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0% 0%",
              }}
            ></div>
          </div>
          <div className="flex-fill bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0% 0%",
              }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="flex-fill bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0% 0%",
              }}
            ></div>
          </div>
          <div className="flex-fill text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "21px 21px 0% 0%",
              }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;

export async function getStaticProps(context) {
  const param = context.params.id;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${param}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const path = [];
  for (let i = 1; i <= 20; i++) {
    path.push({ params: { id: i.toString() } });
  }
  return {
    paths: path,
    fallback: true, // can also be true or 'blocking'
  };
}
