import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Ticket, 
  BookOpenText, 
  Users,
  Settings,
  ChevronLeft, 
  ChevronRight,
  ClipboardCheck,
  Package,
  RadioTower,
  Trash2,
  ArrowLeftRight,
  Recycle,
  ShoppingCart,
  Wrench,
  LineChart,
  RefreshCw,
  Clock,
  Plug
} from 'lucide-react';

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: 'ITSM',
    items: [
      {
        title: 'Dashboard',
        href: '/',
        icon: LayoutDashboard,
      },
      {
        title: 'Tickets',
        href: '/tickets',
        icon: Ticket,
      },
      {
        title: 'Knowledge Base',
        href: '/knowledge',
        icon: BookOpenText,
      },
    ]
  },
  {
    title: 'User Management',
    items: [
      {
        title: 'Users',
        href: '/users',
        icon: Users,
      },
      {
        title: 'Connector',
        href: '/connector',
        icon: Plug,
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
      }
    ]
  },
  {
    title: 'Asset Management',
    items: [
      {
        title: 'Inventory',
        href: '/inventory',
        icon: Package,
      },
      {
        title: 'Asset Tracking',
        href: '/tracking',
        icon: RadioTower,
      },
      {
        title: 'Asset Audit',
        href: '/audit',
        icon: ClipboardCheck,
      },
      {
        title: 'Device Wipe',
        href: '/wipe',
        icon: Trash2,
      },
      {
        title: 'Lease Return',
        href: '/lease-return',
        icon: ArrowLeftRight,
      },
      {
        title: 'Disposal',
        href: '/disposal',
        icon: Recycle,
      },
      {
        title: 'Procurement',
        href: '/procurement',
        icon: ShoppingCart,
      },
      {
        title: 'Asset Repair',
        href: '/repair',
        icon: Wrench,
      },
      {
        title: 'Future Forecast',
        href: '/forecast',
        icon: LineChart,
      },
      {
        title: 'Asset Refresh',
        href: '/refresh',
        icon: RefreshCw,
      },
      {
        title: 'Device Lifecycle',
        href: '/lifecycle',
        icon: Clock,
      },
    ]
  }
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div
      className={cn(
        "h-screen flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between h-16">
        {!collapsed && (
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-white">Myproject</span>
            <span className="text-zenith-400 ml-1">ITSM</span>
          </Link>
        )}
        {collapsed && (
          <Link to="/" className="w-full flex justify-center">
            <span className="font-bold text-xl text-white">M</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-full hover:bg-sidebar-accent text-sidebar-foreground"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>
      
      <nav className="flex-1 py-4">
        {navSections.map((section) => (
          <div key={section.title} className="mb-6">
            {!collapsed && (
              <div className="px-4 mb-2">
                <span className="text-xs font-semibold text-sidebar-foreground/70">
                  {section.title}
                </span>
              </div>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center py-3 px-3 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors",
                      window.location.pathname === item.href && "bg-sidebar-accent text-white"
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-2 text-sidebar-foreground" />
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      
      <div className="p-4">
        {!collapsed && (
          <div className="p-3 bg-sidebar-accent rounded-md">
            <div className="text-xs text-zenith-300">Myproject ITSM v1.0</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
