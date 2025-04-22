
import { Link } from "react-router-dom";
import { Plug } from "lucide-react";

const connectors = [
  {
    name: "Zapier Integration",
    description: "Automate workflows by connecting your ITSM to Zapier.",
    href: "#",
    active: false,
  },
  {
    name: "SSO / Identity Provider",
    description: "Manage authentication via SSO (coming soon).",
    href: "#",
    active: false,
  },
  {
    name: "Webhooks",
    description: "Send and receive webhooks to automate events.",
    href: "#",
    active: false,
  },
];

const Connector = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <Plug className="h-7 w-7 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Connectors</h1>
      </div>
      <p className="text-muted-foreground mb-10">
        Integrate with third-party tools and automate your ITSM workflows. More coming soon.
      </p>
      <div className="grid gap-6">
        {connectors.map((conn) => (
          <div
            key={conn.name}
            className="p-5 rounded-xl border bg-white flex flex-col md:flex-row md:items-center justify-between gap-3"
          >
            <div>
              <div className="font-semibold text-xl">{conn.name}</div>
              <div className="text-sm text-muted-foreground">{conn.description}</div>
            </div>
            {conn.active ? (
              <button className="bg-green-100 text-green-700 px-4 py-2 rounded font-medium cursor-default" disabled>
                Connected
              </button>
            ) : (
              <button
                className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded font-medium"
                disabled
                tabIndex={-1}
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connector;
