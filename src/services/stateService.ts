import { API } from "lib/constants";
import fetcher from "lib/fetcher";
import { ApiDataResponse } from "lib/types";
import { StatsData, StatsDataDto } from "lib/types/stats";
import { objectToString } from "utils/functions";

const statsCards = async (
  params: StatsDataDto,
): Promise<ApiDataResponse<StatsData>> => {
  return fetcher(API.STATS.CARDS + objectToString(params));
};

export { statsCards };