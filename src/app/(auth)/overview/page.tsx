import React, { Suspense } from "react";

import { type Metadata } from "next";

import { overviewFetchList } from "@/fetch";

import { OverviewTableSkeleton, OverviewTable } from "./components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Overview: React.FC<ParamPageProps> = async ({ searchParams }) => {
  const overviewList = await overviewFetchList({
    page: searchParams.page,
    limit: "10",
  });

  return (
    <>
      <Suspense fallback={<OverviewTableSkeleton />}>
        <OverviewTable data={overviewList} />
      </Suspense>
    </>
  );
};

export default Overview;
