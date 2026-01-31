import React from "react";
import type { QueriesBySourceData } from "../types/dashboard.types";
import { formatNumber } from "../utils/formatNumbers";
import SlackIcon from "../assets/Slack.svg";
import MicrosoftTeamsIcon from "../assets/MicrosoftTeams.svg";
import AWSCloudIcon from "../assets/AWSCloud.svg";
import GoogleCloudIcon from "../assets/GoogleCloud.svg";
import OracleIcon from "../assets/Oracle.svg";
import GmailIcon from "../assets/Gmail.svg";

interface QueriesBySourceTableProps {
  data: QueriesBySourceData;
}

function getSourceIcon(source: string): React.ReactElement {
  const iconMap: Record<string, string> = {
    Slack: SlackIcon,
    "Microsoft Teams": MicrosoftTeamsIcon,
    "AWS Cloud": AWSCloudIcon,
    "Google Cloud": GoogleCloudIcon,
    Oracle: OracleIcon,
    "G Suite Gmail": GmailIcon,
  };
  
  const iconSrc = iconMap[source] || '';
  
  return (
    <img 
      src={iconSrc} 
      alt={source} 
      className="w-4 h-4"
    />
  );
}

function getProgressBarColor(source: string): string {
  if (source === "Slack") return "bg-green-500";
  if (source === "Microsoft Teams") return "bg-blue-500";
  if (source === "AWS Cloud") return "bg-blue-500";
  if (source === "Google Cloud") return "bg-orange-500";
  return "bg-orange-500";
}

export const QueriesBySourceTable = ({ data }: QueriesBySourceTableProps) => {
  if (!data || data.length === 0) {
    return null;
  }

  const maxValue = Math.max(...data.map(item => item.queries));

  return (
    <div className="w-full bg-white pt-1 pb-1 h-full flex flex-col">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left text-sm font-medium text-gray-600 pb-1">Source</th>
            <th className="text-right text-sm font-medium text-gray-600 pb-1">Queries</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const percentage = (item.queries / maxValue) * 100;
            const progressColor = getProgressBarColor(item.source);

            return (
              <tr key={index} className="border-0">
                <td className="px-1 py-0.5">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-50 rounded-lg border border-gray-50 p-1.5 shrink-0">{getSourceIcon(item.source)}</div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">{item.source}</span>
                  </div>
                </td>
                <td className="px-1 py-0.5">
                  <div className="flex items-center justify-end gap-4">
                    <div className="w-full max-w-[300px] h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${progressColor} transition-all duration-300`}
                        style={{ width: `${Math.max(percentage, 2)}%` }}
                      />
                    </div>
                    <div className="text-sm font-medium text-gray-600 text-right min-w-[60px]">
                      {formatNumber(item.queries)}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
