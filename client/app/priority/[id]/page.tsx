import PriorityWrapper from "@/app/components/PriorityWrapper";
import React from "react";

const Priority = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <PriorityWrapper priorityId={id as PriorityType} />;
};

export default Priority;
