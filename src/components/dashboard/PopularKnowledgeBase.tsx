
import { BookOpenText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface KBArticle {
  id: string;
  title: string;
  views: number;
  category: string;
}

const popularKB: KBArticle[] = [
  {
    id: "kb-1",
    title: "How to reset your password",
    views: 1205,
    category: "Account Management",
  },
  {
    id: "kb-2",
    title: "VPN setup guide for remote workers",
    views: 987,
    category: "Network",
  },
  {
    id: "kb-3",
    title: "Requesting new hardware procedure",
    views: 752,
    category: "Procurement",
  },
  {
    id: "kb-4",
    title: "Email forwarding setup instructions",
    views: 631,
    category: "Email",
  },
  {
    id: "kb-5",
    title: "Common printer troubleshooting steps",
    views: 529,
    category: "Hardware",
  },
];

const PopularKnowledgeBase = () => {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Popular Knowledge Base</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {popularKB.map((article) => (
          <div key={article.id} className="flex items-start gap-3 group">
            <div className="mt-0.5 rounded-md bg-primary/10 p-1 text-primary">
              <BookOpenText className="h-4 w-4" />
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center justify-between">
                <Link
                  to={`/knowledge/${article.id}`}
                  className="font-medium text-sm group-hover:text-primary group-hover:underline transition-colors"
                >
                  {article.title}
                </Link>
                <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{article.category}</span>
                <span>{article.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularKnowledgeBase;
