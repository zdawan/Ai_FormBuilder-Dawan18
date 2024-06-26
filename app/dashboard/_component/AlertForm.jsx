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
import { AiChatSession } from "@/configs/aimodel";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { JSONforms } from "@/configs/schema";
import { db } from "@/configs";

const PROMPT =
  ", On the basis of description please give form in json format with form title, form subheading with form having Form field, form name, placeholder name, and form label, fieldType, field required In Json format";

function AlertForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState();
  const route = useRouter();

  const onCreateForm = async () => {
    setLoading(true);
    const result = await AiChatSession.sendMessage(
      "Description:" + userInput + PROMPT
    );
    console.log(result.response.text());
    if (result.response.text()) {
      const resp = await db
        .insert(JSONforms)
        .values({
          jsonform: result.response.text(),
          createdAt: moment().format("DD/MM/yyyy"),
        })
        .returning({ id: JSONforms.id });
      console.log("New Form ID", resp[0].id);
      if (resp[0].id) {
        route.push("/edit-form/" + resp[0].id);
      }

      setLoading(false);
    }

    setLoading(false);
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
                <Button disabled={loading} onClick={() => onCreateForm()}>
                  {" "}
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Create"
                  )}{" "}
                </Button>{" "}
              </div>{" "}
            </DialogDescription>{" "}
          </DialogHeader>{" "}
        </DialogContent>{" "}
      </Dialog>{" "}
    </div>
  );
}

export default AlertForm;
