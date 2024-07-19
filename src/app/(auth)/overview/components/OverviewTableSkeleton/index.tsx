import React from "react";

import { Skeleton } from "@/components";

const OverviewTableSkeleon = () => {
  return (
    <div>
      <Skeleton className="w-[320px] h-[40px] mb-8" />
      <Skeleton className="w-full h-[420px]" />
    </div>
  );
};

export default OverviewTableSkeleon;
