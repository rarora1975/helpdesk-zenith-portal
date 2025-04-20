
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

const Inventory = () => {
  return (
    <div className="p-6">
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
              {mockInventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.serialNumber}</TableCell>
                  <TableCell>{item.model}</TableCell>
                  <TableCell>{item.manufacturer}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
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
