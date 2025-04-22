
import { Link } from "react-router-dom";
import { Database, Cloud, Upload } from "lucide-react";

const connectors = [
  {
    name: "ServiceNow API Connection",
    description: "Connect your ITSM to ServiceNow using API integration.",
    icon: Database,
    href: "/connector/servicenow",
  },
  {
    name: "Intune API Connection",
    description: "Connect to Microsoft Intune for device management.",
    icon: Cloud,
    href: "/connector/intune",
  },
  {
    name: "Manual Data Upload",
    description: "Upload ITSM data manually via file upload.",
    icon: Upload,
    href: "/connector/manual-upload",
  },
];

const Connector = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <Database className="h-7 w-7 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Connectors</h1>
      </div>
      <p className="text-muted-foreground mb-10">
        Integrate with third-party tools and automate your ITSM workflows.
      </p>
      <div className="grid gap-6">
        {connectors.map((conn) => (
          <Link
            key={conn.name}
            to={conn.href}
            className="group p-5 rounded-xl border bg-white flex flex-col md:flex-row md:items-center justify-between gap-3 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <conn.icon className="h-8 w-8 text-primary" />
              <div>
                <div className="font-semibold text-xl group-hover:text-primary">{conn.name}</div>
                <div className="text-sm text-muted-foreground">{conn.description}</div>
              </div>
            </div>
            <span className="ml-auto text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
              Open &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Connector;
