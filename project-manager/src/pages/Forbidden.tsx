import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="h-screen flex items-center justify-center">
        <h1 className="text-4xl text-azul-escuro font-bold">teste 403 - Forbidden</h1>
      </main>
      <Footer />
    </div>

  );
}
