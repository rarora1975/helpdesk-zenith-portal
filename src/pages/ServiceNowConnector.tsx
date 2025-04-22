
import { database } from "lucide-react";

const ServiceNowConnector = () => (
  <div className="max-w-xl mx-auto py-10">
    <div className="flex gap-3 items-center mb-6">
      <database className="h-7 w-7 text-primary" />
      <h2 className="text-2xl font-bold">ServiceNow API Connection</h2>
    </div>
    <p className="text-muted-foreground mb-6">
      Connect your ITSM to ServiceNow via API for automated data sync.
    </p>
    <div className="border rounded-xl p-5 bg-white">
      <div className="font-medium mb-2">API Connection Setup</div>
      <div className="text-sm text-muted-foreground mb-4">
        Please contact your admin to complete API setup. 
        (Integration coming soon)
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded font-medium cursor-not-allowed opacity-60" disabled>
        Coming Soon
      </button>
    </div>
  </div>
);

export default ServiceNowConnector;
