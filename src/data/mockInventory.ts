
import { InventoryItem } from '@/types/inventory';

const generateAdditionalDevices = (): InventoryItem[] => {
  const manufacturers = ['Dell', 'Apple', 'Lenovo', 'Microsoft', 'HP', 'Asus', 'Acer'];
  const models = {
    Dell: ['XPS 13', 'Latitude 7420', 'Precision 5550'],
    Apple: ['MacBook Pro 14', 'MacBook Air', 'MacBook Pro 16'],
    Lenovo: ['ThinkPad X1', 'Yoga Slim 7', 'Legion 5'],
    Microsoft: ['Surface Pro X', 'Surface Laptop 4', 'Surface Book 3'],
    HP: ['Spectre x360', 'EliteBook 840', 'OMEN 15'],
    Asus: ['ZenBook 14', 'ROG Zephyrus', 'VivoBook S15'],
    Acer: ['Swift 3', 'Predator Helios', 'Aspire 5']
  };
  const statuses = ['In Use', 'Available', 'In Repair', 'Retired'];
  const locations = [
    'New York Office', 'San Francisco Office', 'Austin Office', 'Chicago Office',
    'IT Storage', 'IT Repair Center', 'Disposal Queue', 'Data Center'
  ];
  const assignedToNames = [
    'John Smith', 'Sarah Johnson', 'Mike Wilson', 'Emily Davis',
    'Chris Lee', 'Anna Brown', 'David Clark', 'James Miller', ''
  ];
  const additionalDevices: InventoryItem[] = [];
  const baseIdNumber = 6; // since "CMDB001" to "CMDB005" exist already

  for (let i = 0; i < 100; i++) {
    const manufacturer = manufacturers[i % manufacturers.length];
    const modelList = models[manufacturer];
    const model = modelList[i % modelList.length];
    const status = statuses[i % statuses.length];
    const location = locations[i % locations.length];
    const assignedTo = status === 'Available' || status === 'Retired' ? '' : assignedToNames[i % assignedToNames.length];
    const purchaseYear = 2021 + (i % 3); // between 2021 and 2023
    const purchaseMonth = ((i % 12) + 1).toString().padStart(2, '0');
    const purchaseDay = ((i % 28) + 1).toString().padStart(2, '0');
    const purchaseDate = `${purchaseYear}-${purchaseMonth}-${purchaseDay}`;
    const lastUpdated = `2024-03-${(28 - (i % 28)).toString().padStart(2, '0')}`;

    additionalDevices.push({
      id: `CMDB${(baseIdNumber + i).toString().padStart(3, '0')}`,
      serialNumber: `${manufacturer.substring(0,3).toUpperCase()}-${purchaseYear}-${(100 + i).toString().padStart(3, '0')}`,
      model,
      manufacturer,
      status: status as 'In Use' | 'Available' | 'In Repair' | 'Retired',
      assignedTo,
      purchaseDate,
      lastUpdated,
      location
    });
  }
  return additionalDevices;
};

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
  },
  ...generateAdditionalDevices()
];
