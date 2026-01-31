import { useState, useRef, useCallback } from "react";
import { ChartCard } from "../components/ChartCard";
import { BarChart } from "../components/Charts/BarChart";
import { LineChart } from "../components/Charts/LineChart";
import { QueriesBySourceTable } from "../components/QueriesBySourceTable";
import { UsersCard } from "../components/UsersCard";
import { TimeRangeFilter } from "../components/TimeRangeFilter";
import { MdRefresh } from "react-icons/md";
import { useChartData } from "../hooks/useChartData";

import type { DateRange } from "../types/dashboard.types.ts";

import {
  fetchUniqueLogins,
  fetchQueriesExecuted,
  fetchQueriesBySource,
  fetchAvgResponseTimeWorkflow,
  fetchFirewallApiCalls,
  fetchAvgResponseTimeFirewall,
} from "../api/dashboard.api";

function DashboardPage() {
  const [dateRange, setDateRange] = useState<DateRange>("90d");
  const usersRefreshRef = useRef<(() => void) | null>(null);

  const uniqueLogins = useChartData(() => fetchUniqueLogins(dateRange), [dateRange]);
  const queriesExecuted = useChartData(() => fetchQueriesExecuted(dateRange), [dateRange]);
  const queriesBySource = useChartData(() => fetchQueriesBySource(dateRange), [dateRange]);
  const avgWorkflow = useChartData(() => fetchAvgResponseTimeWorkflow(dateRange), [dateRange]);
  const firewallCalls = useChartData(() => fetchFirewallApiCalls(dateRange), [dateRange]);
  const avgFirewall = useChartData(() => fetchAvgResponseTimeFirewall(dateRange), [dateRange]);

  const handleRefreshAll = useCallback(() => {
    uniqueLogins.loadData();
    queriesExecuted.loadData();
    queriesBySource.loadData();
    avgWorkflow.loadData();
    firewallCalls.loadData();
    avgFirewall.loadData();
    usersRefreshRef.current?.();
  }, [
    uniqueLogins.loadData,
    queriesExecuted.loadData,
    queriesBySource.loadData,
    avgWorkflow.loadData,
    firewallCalls.loadData,
    avgFirewall.loadData,
  ]);

  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="w-full p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-normal text-black">Analytics</h1>
          <button
            onClick={handleRefreshAll}
            className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm transition-colors"
          >
            <MdRefresh className="w-4 h-4" />
            Refresh Dashboard
          </button>
        </div>
        <div className="mt-2">
          <TimeRangeFilter value={dateRange} onChange={setDateRange} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 w-full p-4 items-stretch">

        <div className="lg:col-span-2 flex">
          <UsersCard dateRange={dateRange} onRefreshReady={(fn) => { usersRefreshRef.current = fn; }} />
        </div>

        <div className="lg:col-span-4 flex">
          <ChartCard
            title="Number of Unique Logins"
            loading={uniqueLogins.loading}
            error={uniqueLogins.error}
            onRefresh={uniqueLogins.loadData}
            total={uniqueLogins.data?.total}
          >
            {uniqueLogins.data && <BarChart data={uniqueLogins.data} />}
          </ChartCard>
        </div>

        <div className="lg:col-span-3 flex">
          <ChartCard
            title="Queries Executed in Workflow"
            loading={queriesExecuted.loading}
            error={queriesExecuted.error}
            onRefresh={queriesExecuted.loadData}
            total={queriesExecuted.data?.total}
            indicatorColor="bg-green-500"
          >
            {queriesExecuted.data && <BarChart data={queriesExecuted.data} accentColor="#84BD60" />}
          </ChartCard>
        </div>

        <div className="lg:col-span-3 flex">
          <ChartCard
            title="Queries by Source"
            loading={queriesBySource.loading}
            error={queriesBySource.error}
            onRefresh={queriesBySource.loadData}
          >
            {queriesBySource.data && <QueriesBySourceTable data={queriesBySource.data} />}
          </ChartCard>
        </div>

        <div className="lg:col-span-6">
          <ChartCard
            title="Avg. Response Time – Workflow"
            loading={avgWorkflow.loading}
            error={avgWorkflow.error}
            onRefresh={avgWorkflow.loadData}
            total={avgWorkflow.data?.total}
            totalFormat="time"
            indicatorColor="bg-green-500"
          >
            {avgWorkflow.data && <LineChart data={avgWorkflow.data} accentColor="#84BD60" />}
          </ChartCard>
        </div>

        <div className="lg:col-span-3">
          <ChartCard
            title="Firewall API Calls"
            loading={firewallCalls.loading}
            error={firewallCalls.error}
            onRefresh={firewallCalls.loadData}
            total={firewallCalls.data?.total}
          >
            {firewallCalls.data && <BarChart data={firewallCalls.data} />}
          </ChartCard>
        </div>

        <div className="lg:col-span-3">
          <ChartCard
            title="Avg. Response Time – Firewall"
            loading={avgFirewall.loading}
            error={avgFirewall.error}
            onRefresh={avgFirewall.loadData}
            total={avgFirewall.data?.total}
            totalFormat="time"
          >
            {avgFirewall.data && <LineChart data={avgFirewall.data} accentColor="#3B82F6" />}
          </ChartCard>
        </div>

      </div>
    </div>
  );
}

export default DashboardPage;
