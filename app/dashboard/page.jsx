import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import AlertForm from "./_component/AlertForm";

function Dashboard() {
  return (
    <div className="p-10">
      {" "}
      <h2 className="font-bold text-3xl flex items-center justify-between ">
        {" "}
        Dashboard <AlertForm />
      </h2>{" "}
    </div>
  );
}

export default Dashboard;
