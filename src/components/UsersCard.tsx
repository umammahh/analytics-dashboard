import { useEffect } from "react";
import type { UsersData } from "../types/dashboard.types";
import { formatNumber } from "../utils/formatNumbers";
import { MdRefresh } from "react-icons/md";
import { useChartData } from "../hooks/useChartData";
import { fetchUsersData } from "../api/dashboard.api";
import type { DateRange } from "../types/dashboard.types";

interface UsersCardProps {
  dateRange?: DateRange;
  onRefreshReady?: (refreshFn: () => void) => void;
}

export const UsersCard = ({ dateRange = "90d", onRefreshReady }: UsersCardProps) => {
  const { data, loading, error, loadData } = useChartData<UsersData>(
    () => fetchUsersData(dateRange),
    [dateRange]
  );

  useEffect(() => {
    onRefreshReady?.(loadData);
  }, [onRefreshReady, loadData]);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 flex flex-col h-full w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-medium text-black">Users</h1>
        <button
          onClick={loadData}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:underline"
        >
          <MdRefresh className="w-4 h-4" />
          
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Loading…</p>}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {!loading && !error && data && (
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <div className="h-16 w-0.5 rounded-full bg-blue-400 shrink-0" />
            <div className="flex flex-col">
              <p className="text-lg text-black">Total Users</p>
              <p className="text-3xl font-medium text-black">
                {formatNumber(data.total)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="h-16 w-0.5 rounded-full bg-green-500 shrink-0" />
            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-3xl font-medium text-black">
                {formatNumber(data.active)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="h-16 w-0.5 rounded-full bg-gray-500 shrink-0" />
            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Inactive</p>
              <p className="text-3xl font-medium text-black">
                {formatNumber(data.inactive)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
