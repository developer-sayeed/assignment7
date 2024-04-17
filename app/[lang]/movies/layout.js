import Sidebar from "@/app/components/Sidebar";
import { getDictionary } from "../disctionaries";

export default function RootLayout({ children, params: { lang } }) {
  const dict = getDictionary(lang);
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto">
        <Sidebar dict={dict} />
        {children}
      </div>
    </main>
  );
}
