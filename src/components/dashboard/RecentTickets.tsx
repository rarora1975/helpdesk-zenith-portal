
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Ticket {
  id: string;
  title: string;
  status: "open" | "in-progress" | "pending" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: string;
  assignee: string;
}

const recentTickets: Ticket[] = [
  {
    id: "TICK-1234",
    title: "Unable to access email after password reset",
    status: "open",
    priority: "high",
    createdAt: "2025-04-18T10:30:00Z",
    assignee: "Alex Morgan",
  },
  {
    id: "TICK-1233",
    title: "Request for new laptop for new hire",
    status: "in-progress",
    priority: "medium",
    createdAt: "2025-04-18T09:15:00Z",
    assignee: "Jamie Chen",
  },
  {
    id: "TICK-1232",
    title: "Printer on 3rd floor not working",
    status: "pending",
    priority: "low",
    createdAt: "2025-04-17T16:45:00Z",
    assignee: "Unassigned",
  },
  {
    id: "TICK-1231",
    title: "VPN connection issues for remote team",
    status: "closed",
    priority: "urgent",
    createdAt: "2025-04-17T11:20:00Z",
    assignee: "Morgan Freeman",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-blue-100 text-blue-800";
    case "in-progress":
      return "bg-yellow-100 text-yellow-800";
    case "pending":
      return "bg-orange-100 text-orange-800";
    case "closed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "bg-red-100 text-red-800";
    case "high":
      return "bg-orange-100 text-orange-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const RecentTickets = () => {
  return (
    <Card className="col-span-1 md:col-span-2 h-[400px]">
      <CardHeader>
        <CardTitle>Recent Tickets</CardTitle>
        <CardDescription>
          Recently created or updated tickets in your queue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 overflow-auto max-h-[240px]">
        {recentTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg gap-2 animate-fade-in"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">{ticket.id}</span>
                <Badge className={getStatusColor(ticket.status)}>
                  {ticket.status.replace("-", " ")}
                </Badge>
                <Badge className={getPriorityColor(ticket.priority)}>
                  {ticket.priority}
                </Badge>
              </div>
              <h4 className="font-medium">{ticket.title}</h4>
              <div className="text-xs text-muted-foreground">
                Created {formatDate(ticket.createdAt)} • Assignee: {ticket.assignee}
              </div>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to={`/tickets/${ticket.id}`}>View</Link>
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/tickets">View All Tickets</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecentTickets;
