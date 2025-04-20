
import { InventoryItem } from '@/types/inventory';

export const mockInventoryData: InventoryItem[] = [
  {
    id: "CMDB001",
    serialNumber: "XPS-2023-001",
    model: "XPS 13",
    manufacturer: "Dell",
    status: "In Use",
    assignedTo: "John Smith",
    purchaseDate: "2023-01-15",
    lastUpdated: "2024-03-20",
    location: "New York Office"
  },
  {
    id: "CMDB002",
    serialNumber: "MBP-2023-002",
    model: "MacBook Pro 14",
    manufacturer: "Apple",
    status: "Available",
    assignedTo: "",
    purchaseDate: "2023-02-20",
    lastUpdated: "2024-03-19",
    location: "IT Storage"
  },
  {
    id: "CMDB003",
    serialNumber: "THK-2023-003",
    model: "ThinkPad X1",
    manufacturer: "Lenovo",
    status: "In Repair",
    assignedTo: "Sarah Johnson",
    purchaseDate: "2023-03-10",
    lastUpdated: "2024-03-18",
    location: "IT Repair Center"
  },
  {
    id: "CMDB004",
    serialNumber: "SPX-2023-004",
    model: "Surface Pro X",
    manufacturer: "Microsoft",
    status: "In Use",
    assignedTo: "Mike Wilson",
    purchaseDate: "2023-04-05",
    lastUpdated: "2024-03-17",
    location: "San Francisco Office"
  },
  {
    id: "CMDB005",
    serialNumber: "MBA-2023-005",
    model: "MacBook Air",
    manufacturer: "Apple",
    status: "Retired",
    assignedTo: "",
    purchaseDate: "2022-06-15",
    lastUpdated: "2024-03-16",
    location: "Disposal Queue"
  }
];
