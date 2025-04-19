
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  description, 
  trend,
  className 
}: StatsCardProps) => {
  return (
    <Card className={cn("hover-scale", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 p-1 text-primary flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className={cn(
            "text-xs font-medium mt-2",
            trend.isPositive ? "text-green-500" : "text-red-500"
          )}>
            <span>{trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%</span>
            <span className="text-muted-foreground"> vs last week</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
