import Button from "@/components/common/button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
     <Button name="Get Started" link="/get-started"   medium/>
    </div>
  );
}
