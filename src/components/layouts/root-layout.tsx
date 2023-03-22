import { FC, PropsWithChildren } from "react";
import Footer from "../ui/organisms/Footer";
import Header from "../ui/organisms/Header";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default RootLayout;
