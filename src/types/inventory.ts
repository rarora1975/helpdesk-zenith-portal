
export interface InventoryItem {
  id: string;
  serialNumber: string;
  model: string;
  manufacturer: string;
  status: 'In Use' | 'Available' | 'In Repair' | 'Retired';
  assignedTo: string;
  purchaseDate: string;
  lastUpdated: string;
  location: string;
}
