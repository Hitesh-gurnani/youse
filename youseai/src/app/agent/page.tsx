import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { UserRoundPlus } from "lucide-react";
import { AlertDialogDemo } from "@/components/UserModal";
import { agentsCardData } from "@/utils/agentData";
import PageTitle from "@/components/PageTitle";
import AgentCards from "./agentCards";
import CustomInfiniteScroll from "@/components/CustomInfiniteScroll";
import Link from "next/dist/client/link";
import { cn } from "@/lib/utils";
function Agent() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <PageTitle title="Agent" />
        <Link className={cn(buttonVariants({ variant: "default" }),"gap-x-1 ")} href={"/create-agent"} > <UserRoundPlus size={'sm'} /> <span className='hidden sm:block'>Create Avatar</span> </Link>
      </div>
      <AgentCards />
    </div>
  );
}

export default Agent;
