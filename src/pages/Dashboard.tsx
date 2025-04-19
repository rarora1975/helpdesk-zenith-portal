
import { 
  LayoutDashboard, 
  Ticket, 
  Clock, 
  CheckCircle
} from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import TicketsByStatus from '@/components/dashboard/TicketsByStatus';
import RecentTickets from '@/components/dashboard/RecentTickets';
import PopularKnowledgeBase from '@/components/dashboard/PopularKnowledgeBase';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to Zenith ITSM.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Tickets"
          value={150}
          description="Total active tickets"
          icon={<Ticket className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        
        <StatsCard
          title="Open Tickets"
          value={42}
          description="Awaiting assignment"
          icon={<LayoutDashboard className="h-4 w-4" />}
          trend={{ value: 8, isPositive: false }}
        />
        
        <StatsCard
          title="Overdue"
          value={15}
          description="Past SLA commitment"
          icon={<Clock className="h-4 w-4" />}
          trend={{ value: 2, isPositive: true }}
        />
        
        <StatsCard
          title="Closed Today"
          value={8}
          description="Completed tickets"
          icon={<CheckCircle className="h-4 w-4" />}
          trend={{ value: 5, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <TicketsByStatus />
        <RecentTickets />
        <PopularKnowledgeBase />
      </div>
    </div>
  );
};

export default Dashboard;
