import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
export default PublicLayout;
