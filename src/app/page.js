import Button from "@/components/common/button/Button";
import Footer from "@/components/common/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[10px]">
     <Button name="Get Started" link="/get-started"   medium/>
     <Footer/>
    </div>
  );
}
