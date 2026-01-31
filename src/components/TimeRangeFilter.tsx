import type { DateRange } from "../types/dashboard.types";

interface TimeRangeFilterProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

const timeRangeOptions: { value: DateRange; label: string }[] = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
];

export const TimeRangeFilter = ({ value, onChange }: TimeRangeFilterProps) => {
  return (
    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-md p-1">
      <label className="text-sm font-medium text-gray-700">
        Time Range:
      </label>
      <select
      
        value={value}
        onChange={(e) => onChange(e.target.value as DateRange)}
        className="px-1 py-1 bg-green-50 text-sm font-medium text-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 border-0"
      
      >
        {timeRangeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
