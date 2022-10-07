import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
