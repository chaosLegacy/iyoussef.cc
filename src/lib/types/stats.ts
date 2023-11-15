interface StatsData {
  packageCount: number;
  leadCount: number;
  newLeadsThisMonth: {
    count: number;
    percentageChange: string;
  };
  subscriptionSum: {
    amount: number;
    percentageChange: string;
  };
}

type StatsDataDto = {
    company: string;
}

export type { StatsData, StatsDataDto };