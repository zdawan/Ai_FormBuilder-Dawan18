"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function AlertForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState();

  const onCreateForm = () => {
    console.log(userInput);
  };
  return (
    <div>
      <Button onClick={() => setOpenDialog(true)} className="bg-purple-700">
        {" "}
        + Create Form{" "}
      </Button>{" "}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Create a new form </DialogTitle>{" "}
            <DialogDescription>
              <Textarea
                className="my-2"
                onChange={(Event) => setUserInput(Event.target.value)}
                placeholder="write the description of your form"
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button
                  onClick={() => setOpenDialog(false)}
                  variant="destructive"
                >
                  {" "}
                  Cancel{" "}
                </Button>{" "}
                <Button onClick={() => onCreateForm()}> Create </Button>{" "}
              </div>{" "}
            </DialogDescription>{" "}
          </DialogHeader>{" "}
        </DialogContent>{" "}
      </Dialog>{" "}
    </div>
  );
}

export default AlertForm;
