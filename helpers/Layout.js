import Navi from "../components/Navbar";
import { useDarkMode } from "../store/dark-mode-context";

export default function Layout(props) {
  const { darkMode } = useDarkMode();
  return (
    <main className={darkMode ? "light" : "Dark"}>
      <Navi />
      {props.children}
    </main>
  );
}
