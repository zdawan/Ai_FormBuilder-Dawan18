import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BarChartHorizontal,
  BarChartHorizontalBig,
  CirclePlus,
  LibraryBig,
  MessageSquareCode,
  Plus,
  PlusCircle,
  icons,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 1,
      name: "Responses",
      icon: MessageSquareCode,
      path: "/dashboard/responses",
    },
    {
      id: 1,
      name: "Analytics",
      icon: BarChartHorizontalBig,
      path: "/dashboard/analytics",
    },
    {
      id: 1,
      name: "Upgrade",
      icon: CirclePlus,
      path: "/dashboard/upgrade",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    //console.log(path);
  }, [path]);
  return (
    <div className="h-screen shadow-md border">
      {" "}
      <div className="p-4">
        {" "}
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className={`flex items-center gap-3 p-4 mb-3 hover:bg-purple-700 hover:text-white rounded-lg cursor-pointer ${
              path == menu.path && "bg-purple-700 text-white"
            } `}
          >
            <menu.icon /> {menu.name}{" "}
          </h2>
        ))}{" "}
      </div>{" "}
      <div className="fixed text-sm bottom-17 p-5 w-64">
        <Button className="bg-purple-700 w-full"> +Create Form </Button>{" "}
        <div className="my-5">
          <Progress value={2} />{" "}
          <h2 className="text-sm mt-2  ">
            {" "}
            <strong> 2 </strong>Out of <strong>100</strong> Files{" "}
          </h2>{" "}
          <h2 className="text-xs mt-3 w-44  ">
            {" "}
            <strong> Upgrade </strong>your plan for <strong> Unlimited </strong>{" "}
            AI Form Builder{" "}
          </h2>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default SideNav;
