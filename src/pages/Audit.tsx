
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Schedule from "@/components/audit/Schedule";
import Track from "@/components/audit/Track";
import Review from "@/components/audit/Review";

const Audit = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Asset Audit</h2>
        <p className="text-muted-foreground">
          Schedule, track, and review asset audits
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Asset Audit Management</CardTitle>
          <CardDescription>Manage and track your asset audits</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="schedule" className="space-y-4">
            <TabsList>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="track">Track</TabsTrigger>
              <TabsTrigger value="review">Review</TabsTrigger>
            </TabsList>

            <TabsContent value="schedule" className="space-y-4">
              <Schedule />
            </TabsContent>

            <TabsContent value="track" className="space-y-4">
              <Track />
            </TabsContent>

            <TabsContent value="review" className="space-y-4">
              <Review />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Audit;
