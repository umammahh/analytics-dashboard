import type { ReactNode } from "react";
import { formatTotal } from "../utils/formatNumbers";
import { MdRefresh } from "react-icons/md";

interface ChartCardProps {
  title: string;
  loading: boolean;
  error?: string | null;
  onRefresh: () => void;
  total?: number;
  indicatorColor?: string;
  totalFormat?: "number" | "time";
  children: ReactNode;
}

export const ChartCard = ({
  title,
  loading,
  error,
  onRefresh,
  total,
  indicatorColor,
  totalFormat = "number",
  children,
}: ChartCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 flex flex-col h-full w-full">
   
      <div className={`flex items-center justify-between ${total === undefined ? 'mb-2' : 'mb-4'}`}>
        <h1 className="text-lg font-medium text-black">{title}</h1>
        <button
          onClick={onRefresh}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:underline"
        >
          <MdRefresh className="w-4 h-4" />
          
        </button>
      </div>

      {total !== undefined && (
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className={`h-10 w-0.5 rounded-full ${indicatorColor ?? "bg-blue-400"}`} />
            <p className="text-4xl font-medium text-black">
              {formatTotal(total, totalFormat)}
            </p>
          </div>
        </div>
      )}

      {loading && <p className="text-sm text-gray-500">Loading…</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="flex-1 min-h-[180px]">
          {children}
        </div>
      )}
    </div>
  );
};
