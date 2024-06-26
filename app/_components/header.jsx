import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="p-7 border-b shadow-sm">
      <div className="flex items-center justify-between">
        <a
          href="https://zdawan.github.io/dharshan.github.io/"
          target="_blank"
          className="font-bold text-sm"
        >
          {" "}
          Dawan18.Studio{" "}
        </a>{" "}
        <Image src={"/logo.svg"} height={100} width={50} />{" "}
        <Link href={"/dashboard"}>
          <Button> Dashboard </Button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}

export default Header;
