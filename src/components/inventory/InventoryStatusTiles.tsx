
import { FC } from "react";
import { mockInventoryData } from "@/data/mockInventory";
import { Check, X, AlertTriangle, Info } from "lucide-react";

const statusConfigs = [
  {
    key: "In Use",
    label: "In Use",
    color: "bg-[#F2FCE2] text-green-700",
    border: "border-green-300",
    icon: <Check className="h-6 w-6 text-green-500" />,
  },
  {
    key: "Available",
    label: "Available",
    color: "bg-[#D3E4FD] text-blue-800",
    border: "border-blue-300",
    icon: <Info className="h-6 w-6 text-blue-500" />,
  },
  {
    key: "In Repair",
    label: "In Repair",
    color: "bg-[#FEF7CD] text-yellow-800",
    border: "border-yellow-300",
    icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
  },
  {
    key: "Retired",
    label: "Retired",
    color: "bg-[#F1F0FB] text-gray-500",
    border: "border-gray-300",
    icon: <X className="h-6 w-6 text-gray-400" />,
  },
];

const InventoryStatusTiles: FC = () => {
  // Count devices by status
  const statusCounts = mockInventoryData.reduce<Record<string, number>>((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-full">
      {statusConfigs.map((status) => (
        <div
          key={status.key}
          className={`flex items-center p-4 rounded-lg border ${status.border} ${status.color} shadow-md`}
        >
          <div className="flex items-center justify-center mr-3">{status.icon}</div>
          <div>
            <div className="text-xl font-bold leading-tight">{statusCounts[status.key] ?? 0}</div>
            <div className="text-xs mt-1 tracking-wide font-medium">{status.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryStatusTiles;
