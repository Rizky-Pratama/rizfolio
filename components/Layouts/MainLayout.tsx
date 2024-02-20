import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="lg:flex max-w-7xl mx-auto">
      <Navbar />
      <main className="pt-5 px-8 lg:px-32 w-full lg:border-r border-white/20 text-stone-100">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
