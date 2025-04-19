
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Filter } from "lucide-react";

interface Ticket {
  id: string;
  title: string;
  status: "open" | "in-progress" | "pending" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: string;
  assignee: string;
  requester: string;
}

const tickets: Ticket[] = [
  {
    id: "TICK-1234",
    title: "Unable to access email after password reset",
    status: "open",
    priority: "high",
    createdAt: "2025-04-18T10:30:00Z",
    assignee: "Alex Morgan",
    requester: "Sarah Johnson",
  },
  {
    id: "TICK-1233",
    title: "Request for new laptop for new hire",
    status: "in-progress",
    priority: "medium",
    createdAt: "2025-04-18T09:15:00Z",
    assignee: "Jamie Chen",
    requester: "Michael Rodriguez",
  },
  {
    id: "TICK-1232",
    title: "Printer on 3rd floor not working",
    status: "pending",
    priority: "low",
    createdAt: "2025-04-17T16:45:00Z",
    assignee: "Unassigned",
    requester: "Emily Brown",
  },
  {
    id: "TICK-1231",
    title: "VPN connection issues for remote team",
    status: "closed",
    priority: "urgent",
    createdAt: "2025-04-17T11:20:00Z",
    assignee: "Morgan Freeman",
    requester: "David Smith",
  },
  {
    id: "TICK-1230",
    title: "Software license renewal for Design team",
    status: "open",
    priority: "medium",
    createdAt: "2025-04-16T14:50:00Z",
    assignee: "Jamie Chen",
    requester: "Lisa Wong",
  },
  {
    id: "TICK-1229",
    title: "Meeting room projector not displaying",
    status: "closed",
    priority: "high",
    createdAt: "2025-04-16T09:10:00Z",
    assignee: "Alex Morgan",
    requester: "Robert Martinez",
  },
  {
    id: "TICK-1228",
    title: "New user onboarding",
    status: "in-progress",
    priority: "medium",
    createdAt: "2025-04-15T16:25:00Z",
    assignee: "Morgan Freeman",
    requester: "Jennifer Lee",
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
    year: "numeric",
  });
};

const Tickets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      searchQuery === "" ||
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    
    const matchesPriority =
      priorityFilter === "all" || ticket.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tickets</h1>
          <p className="text-muted-foreground">
            Manage and track support tickets
          </p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" />
          Create Ticket
        </Button>
      </div>

      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-[180px]">
              <Select
                value={statusFilter}
                onValueChange={(value) => setStatusFilter(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[180px]">
              <Select
                value={priorityFilter}
                onValueChange={(value) => setPriorityFilter(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Requester</TableHead>
                <TableHead>Assignee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <p>No tickets found</p>
                      <p className="text-sm">
                        Try adjusting your search or filter criteria
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredTickets.map((ticket) => (
                  <TableRow key={ticket.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="font-medium">{ticket.id}</div>
                      <div className="text-sm text-muted-foreground">
                        {ticket.title}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(ticket.createdAt)}</TableCell>
                    <TableCell>{ticket.requester}</TableCell>
                    <TableCell>{ticket.assignee}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
