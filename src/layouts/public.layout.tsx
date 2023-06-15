import { ReactNode, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
function replay(eventType: string) {
  const event = new Event(eventType);
  console.log(eventType);
  window.dispatchEvent(event);
}

function PublicLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    replay("DOMContentLoaded");
    replay("load");
  }, []);
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
export default PublicLayout;
