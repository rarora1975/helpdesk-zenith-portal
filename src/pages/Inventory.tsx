
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockInventoryData } from "@/data/mockInventory";
import { Badge } from "@/components/ui/badge";
import InventoryStatusTiles from "@/components/inventory/InventoryStatusTiles";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Use':
      return 'bg-green-500';
    case 'Available':
      return 'bg-blue-500';
    case 'In Repair':
      return 'bg-yellow-500';
    case 'Retired':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};

const statusOptions = [
  { value: "In Use", label: "In Use" },
  { value: "Available", label: "Available" },
  { value: "In Repair", label: "In Repair" },
  { value: "Retired", label: "Retired" }
];

const Inventory = () => {
  const [assets, setAssets] = useState(mockInventoryData);

  const handleStatusChange = (id: string, newStatus: string) => {
    setAssets((current) =>
      current.map((asset) =>
        asset.id === id ? { ...asset, status: newStatus } : asset
      )
    );
  };

  return (
    <div className="p-6">
      <InventoryStatusTiles />
      <Card>
        <CardHeader>
          <CardTitle>Laptop Inventory (CMDB)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Serial Number</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Manufacturer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Purchase Date</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.serialNumber}</TableCell>
                  <TableCell>{item.model}</TableCell>
                  <TableCell>{item.manufacturer}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                      <Select
                        value={item.status}
                        onValueChange={(value) => handleStatusChange(item.id, value)}
                      >
                        <SelectTrigger className="w-28 h-8 ml-2 text-xs" aria-label="Change status">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                  <TableCell>{item.assignedTo || '-'}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.purchaseDate}</TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;

