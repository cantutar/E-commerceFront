import Navi from "../components/Navbar";

export default function Layout(props) {
  return (
    <main>
      <Navi />
      {props.children}
    </main>
  );
}
