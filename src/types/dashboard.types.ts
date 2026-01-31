export type DateRange = "7d" | "30d" | "90d";

export interface BaseChartData {
  total: number;
}

export interface BarChartData extends BaseChartData {
  categories: string[];
  values: number[];
}

export interface LineChartData extends BaseChartData {
  categories: string[];
  values: number[];
}

export type QueriesBySourceData = {
  source: string;
  queries: number;
}[];

export interface DashboardData {
  uniqueLogins: BarChartData;
  queriesExecuted: BarChartData;
  queriesBySource: QueriesBySourceData;
  avgResponseTimeWorkflow: LineChartData;
  firewallApiCalls: BarChartData;
  avgResponseTimeFirewall: LineChartData;
}

export interface ApiChartResponse {
  total: number;
  data: { label: string; value: number }[];
}

export interface UsersData {
  total: number;
  active: number;
  inactive: number;
}
