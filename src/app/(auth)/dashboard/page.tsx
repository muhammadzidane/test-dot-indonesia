import React, { Suspense } from "react";

import { type Metadata } from "next";

import { dashboardFetchPlayList } from "@/fetch/dashboard";

import { MusicPlayListSkeleton, MusicPlayList } from "./components";

export const metadata: Metadata = {
  title: "Dashboard - DOT Indonesia",
  description: "...",
};

const Dashboard = async () => {
  const playlist = await dashboardFetchPlayList({ limit: "20", page: "1" });

  return (
    <>
      <Suspense fallback={<MusicPlayListSkeleton />}>
        <MusicPlayList data={playlist} />
      </Suspense>
    </>
  );
};

export default Dashboard;
