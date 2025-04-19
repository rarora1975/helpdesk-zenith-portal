
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Audit = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Audit Log</h2>
        <p className="text-muted-foreground">
          Track and monitor system activities and changes
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>System Activity</CardTitle>
          <CardDescription>Recent actions and changes in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground">
            Audit functionality will be implemented here
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Audit;
