import { customFetch } from "@/helpers";

export const dashboardFetchPlayList = async (params: UnknownParams) => {
  const result: BaseResponseApi<DashboardPlaylistData[]> = await customFetch(
    "/home/playlists",
    {
      next: { revalidate: 30 },
      method: "get",
      params,
    }
  );
  return result.data;
};
