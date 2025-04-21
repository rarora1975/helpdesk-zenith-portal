
import { mockInventoryData } from "@/data/mockInventory";
import { Recycle } from "lucide-react";

const DisposalList = () => {
  const retiredAssets = mockInventoryData.filter((item) => item.status === "Retired");
  return (
    <div className="p-6">
      <div className="flex items-center mb-4 gap-2">
        <Recycle className="h-6 w-6 text-gray-500" />
        <h2 className="text-xl font-semibold text-gray-700">Retired Assets (Disposal)</h2>
      </div>
      <div className="bg-white rounded-xl border p-4 shadow">
        {retiredAssets.length === 0 && (
          <div className="text-gray-500">No retired assets.</div>
        )}
        <ul className="divide-y divide-gray-200">
          {retiredAssets.map((asset) => (
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

export default DisposalList;
