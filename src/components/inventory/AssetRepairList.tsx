
import { mockInventoryData } from "@/data/mockInventory";
import { Wrench } from "lucide-react";

const AssetRepairList = () => {
  const inRepairAssets = mockInventoryData.filter((item) => item.status === "In Repair");
  return (
    <div className="p-6">
      <div className="flex items-center mb-4 gap-2">
        <Wrench className="h-6 w-6 text-yellow-600" />
        <h2 className="text-xl font-semibold text-yellow-700">Assets In Repair</h2>
      </div>
      <div className="bg-white rounded-xl border p-4 shadow">
        {inRepairAssets.length === 0 && (
          <div className="text-gray-500">No assets in repair.</div>
        )}
        <ul className="divide-y divide-gray-200">
          {inRepairAssets.map((asset) => (
            <li key={asset.id} className="py-3 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-semibold">{asset.model}</span> ({asset.manufacturer})
                <span className="ml-2 text-gray-400 text-xs">ID: {asset.id}</span>
              </div>
              <div className="text-gray-500 text-sm">
                Location: {asset.location} {asset.assignedTo && <span className="ml-4">Assigned: {asset.assignedTo}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssetRepairList;
