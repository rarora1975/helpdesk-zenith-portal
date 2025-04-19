
import { useState } from "react";
import { 
  Bell, 
  Mail, 
  Shield, 
  Upload, 
  Users, 
  Workflow,
  Check,
  Settings as SettingsIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setFormSubmitting(false);
      toast({
        title: "Settings updated",
        description: "Your settings have been updated successfully.",
        action: (
          <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-green-500" />
          </div>
        ),
      });
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            <span className="hidden md:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden md:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="teams" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Teams</span>
          </TabsTrigger>
          <TabsTrigger value="workflows" className="flex items-center gap-2">
            <Workflow className="h-4 w-4" />
            <span className="hidden md:inline">Workflows</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden md:inline">Security</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Company Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" defaultValue="Zenith ITSM" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="domain">Company Domain</Label>
                      <Input id="domain" defaultValue="zenithitsm.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" defaultValue="123 Tech Avenue, Suite 500&#10;San Francisco, CA 94107" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Default Timezone</Label>
                      <Select defaultValue="America/Los_Angeles">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time (US & Canada)</SelectItem>
                          <SelectItem value="America/Chicago">Central Time (US & Canada)</SelectItem>
                          <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                          <SelectItem value="UTC">UTC</SelectItem>
                          <SelectItem value="Europe/London">London</SelectItem>
                          <SelectItem value="Europe/Paris">Paris</SelectItem>
                          <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="MM/DD/YYYY">
                        <SelectTrigger id="date-format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Branding</h3>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-[180px] space-y-2">
                      <Label>Logo</Label>
                      <div className="border rounded-md flex flex-col items-center justify-center p-4 h-32 bg-muted/20">
                        <div className="text-3xl font-bold text-center mb-2">Z</div>
                        <Button variant="outline" size="sm" className="h-8 text-xs gap-1">
                          <Upload className="h-3 w-3" />
                          Upload
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Recommended: 300x100px PNG or SVG</p>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <Label>System Theme</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="p-2 border rounded-md flex items-center gap-2 hover:bg-accent cursor-pointer bg-accent">
                            <div className="h-4 w-4 rounded-full bg-zenith-400 ring-2 ring-offset-2 ring-zenith-400"></div>
                            <span className="text-sm">Zenith Purple</span>
                          </div>
                          <div className="p-2 border rounded-md flex items-center gap-2 hover:bg-accent cursor-pointer">
                            <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                            <span className="text-sm">Blue</span>
                          </div>
                          <div className="p-2 border rounded-md flex items-center gap-2 hover:bg-accent cursor-pointer">
                            <div className="h-4 w-4 rounded-full bg-teal-500"></div>
                            <span className="text-sm">Teal</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accent-color">Accent Color</Label>
                        <div className="flex gap-2">
                          <Input id="accent-color" type="color" value="#9b87f5" className="w-16 p-1 h-9" />
                          <Input defaultValue="#9b87f5" className="flex-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t pt-6 mt-4">
                <Button disabled={formSubmitting}>
                  {formSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications Settings</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <Label className="text-base">New Ticket Created</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive an email when a new ticket is created
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <Label className="text-base">Ticket Assignments</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive an email when a ticket is assigned to you
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <Label className="text-base">Ticket Status Changes</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive an email when the status of your tickets changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <Label className="text-base">Comments on Tickets</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive an email when someone comments on your tickets
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <Label className="text-base">Daily Summary</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive a daily summary of ticket activity
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-medium">System Notifications</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <Label className="text-base">Browser Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications in your browser when you are online
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <Label className="text-base">Sound Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Play a sound when you receive notifications
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-medium">Email Delivery Settings</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="notification-email">Notification Email</Label>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input id="notification-email" 
                        type="email" 
                        defaultValue="admin@zenithitsm.com" 
                        placeholder="Your email address" 
                      />
                    </div>
                    <Button variant="outline">Verify</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t pt-6 mt-4">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Team Settings</CardTitle>
              <CardDescription>
                Configure support teams and assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Team settings content will be implemented in the next version.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflows">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Settings</CardTitle>
              <CardDescription>
                Configure automation and ticket workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Workflow settings content will be implemented in the next version.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure security policies and access controls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Security settings content will be implemented in the next version.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
