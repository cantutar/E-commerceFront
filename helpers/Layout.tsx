import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
