import React from "react";

import { Skeleton } from "@/components";

const MusicPlayListSkeleton = () => {
  return (
    <div>
      <div className="my-8">
        <Skeleton className="w-[320px] h-[40px]" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {[...Array(12)].map((_, numberIndex) => (
          <Skeleton className="w-full h-[286px]" key={numberIndex} />
        ))}
      </div>
    </div>
  );
};

export default MusicPlayListSkeleton;
