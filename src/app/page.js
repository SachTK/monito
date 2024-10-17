import Button from "@/components/common/button/Button";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Hrader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10px]">
     <Header/>
     <Footer/>
    </div>
  );
}
