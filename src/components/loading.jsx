import React from "react";
import { cn } from "@/lib/utils";

const Loading = ({ className }) => {
  return (
    <>
      <div className={cn("loader", className)}></div>
    </>
  );
};

export default Loading;
