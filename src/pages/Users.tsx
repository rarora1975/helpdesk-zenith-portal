import { useState } from "react";
import { Search, Plus, Filter, Mail, Phone, Users as UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "agent" | "user";
  department: string;
  status: "active" | "inactive" | "pending";
  avatarUrl: string;
}

const users: User[] = [
  {
    id: "user-1",
    name: "Alex Morgan",
    email: "alex.morgan@zenithitsm.com",
    phone: "(555) 123-4567",
    role: "admin",
    department: "IT Support",
    status: "active",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "user-2",
    name: "Jamie Chen",
    email: "jamie.chen@zenithitsm.com",
    phone: "(555) 234-5678",
    role: "agent",
    department: "IT Support",
    status: "active",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "user-3",
    name: "Morgan Freeman",
    email: "morgan.freeman@zenithitsm.com",
    phone: "(555) 345-6789",
    role: "agent",
    department: "Network",
    status: "active",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "user-4",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "(555) 456-7890",
    role: "user",
    department: "Marketing",
    status: "active",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "user-5",
    name: "Michael Rodriguez",
    email: "michael.rodriguez@company.com",
    phone: "(555) 567-8901",
    role: "user",
    department: "Finance",
    status: "inactive",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "user-6",
    name: "Emily Brown",
    email: "emily.brown@company.com",
    phone: "(555) 678-9012",
    role: "user",
    department: "Human Resources",
    status: "active",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "user-7",
    name: "David Smith",
    email: "david.smith@company.com",
    phone: "(555) 789-0123",
    role: "user",
    department: "Operations",
    status: "pending",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: "user-8",
    name: "Lisa Wong",
    email: "lisa.wong@company.com",
    phone: "(555) 890-1234",
    role: "user",
    department: "Design",
    status: "active",
    avatarUrl: "/placeholder.svg",
  },
];

interface Group {
  id: string;
  name: string;
  description: string;
  users: User[];
}

const defaultGroups: Group[] = [
  {
    id: "group-1",
    name: "ITSM Group",
    description: "Service Management Team",
    users: [],
  },
  {
    id: "group-2",
    name: "ITAM Group",
    description: "Asset Management Team",
    users: [],
  },
  {
    id: "group-3",
    name: "Admin Group",
    description: "Administrative Team",
    users: [],
  },
  {
    id: "group-4",
    name: "View Only Group",
    description: "Read-only Access",
    users: [],
  },
];

const getRoleBadgeStyle = (role: string) => {
  switch (role) {
    case "admin":
      return "bg-purple-100 text-purple-800";
    case "agent":
      return "bg-blue-100 text-blue-800";
    case "user":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusDotStyle = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-500";
    case "inactive":
      return "bg-gray-400";
    case "pending":
      return "bg-amber-500";
    default:
      return "bg-gray-400";
  }
};

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");
  const [groups, setGroups] = useState<Group[]>(defaultGroups);

  const departments = Array.from(new Set(users.map((user) => user.department)));

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchQuery === "" ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole =
      roleFilter === "all" || user.role === roleFilter;
    
    const matchesDepartment =
      departmentFilter === "all" || user.department === departmentFilter;
    
    return matchesSearch && matchesRole && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage system users and their access
          </p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="users" className="space-y-4">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <div className="w-[150px]">
                    <Select
                      value={roleFilter}
                      onValueChange={(value) => setRoleFilter(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="agent">Agent</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[150px]">
                    <Select
                      value={departmentFilter}
                      onValueChange={(value) => setDepartmentFilter(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredUsers.length === 0 ? (
                  <div className="col-span-full py-8 text-center">
                    <p className="text-lg font-medium">No users found</p>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                ) : (
                  filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="border rounded-lg p-4 bg-white hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={user.avatarUrl} alt={user.name} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <Badge className={getRoleBadgeStyle(user.role)}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1 mb-4 flex-1">
                        <h3 className="font-medium text-lg flex items-center gap-2">
                          {user.name}
                          <span className={`inline-block h-2 w-2 rounded-full ${getStatusDotStyle(user.status)}`} />
                        </h3>
                        <p className="text-muted-foreground text-sm">{user.department}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm border-t pt-3">
                        <a
                          href={`mailto:${user.email}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          {user.email}
                        </a>
                        <a
                          href={`tel:${user.phone}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {user.phone}
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="groups">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {groups.map((group) => (
                  <Card key={group.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <UsersIcon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{group.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {group.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        {group.users.length} members
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
