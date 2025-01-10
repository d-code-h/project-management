import PriorityWrapper from "@/app/components/PriorityWrapper";
import React from "react";

const Priority = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id;
  return <PriorityWrapper priorityId={id as PriorityType} />;
};

export default Priority;
