
import { useState } from "react";
import { Search, FolderOpen, BookOpenText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Category {
  id: string;
  name: string;
  description: string;
  articleCount: number;
}

interface Article {
  id: string;
  title: string;
  categoryId: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}

const categories: Category[] = [
  {
    id: "cat-1",
    name: "Network & VPN",
    description: "Connecting to company resources remotely",
    articleCount: 12,
  },
  {
    id: "cat-2",
    name: "Account Management",
    description: "User accounts, passwords, and permissions",
    articleCount: 15,
  },
  {
    id: "cat-3",
    name: "Hardware",
    description: "Computers, printers, and other devices",
    articleCount: 8,
  },
  {
    id: "cat-4",
    name: "Software",
    description: "Applications, licenses, and installations",
    articleCount: 20,
  },
  {
    id: "cat-5",
    name: "Email & Calendar",
    description: "Email setup, forwarding, and scheduling",
    articleCount: 10,
  },
  {
    id: "cat-6",
    name: "Security",
    description: "Best practices and security policies",
    articleCount: 7,
  },
];

const articles: Article[] = [
  {
    id: "kb-1",
    title: "How to reset your password",
    categoryId: "cat-2",
    excerpt:
      "A step-by-step guide to resetting your password and regaining access to your account.",
    createdAt: "2025-03-15T12:00:00Z",
    updatedAt: "2025-04-01T09:30:00Z",
    views: 1205,
  },
  {
    id: "kb-2",
    title: "VPN setup guide for remote workers",
    categoryId: "cat-1",
    excerpt:
      "Learn how to configure VPN access for securely connecting to company resources while working remotely.",
    createdAt: "2025-02-20T14:15:00Z",
    updatedAt: "2025-04-10T16:45:00Z",
    views: 987,
  },
  {
    id: "kb-3",
    title: "Requesting new hardware procedure",
    categoryId: "cat-3",
    excerpt:
      "Details about the process for requesting new computers or peripheral devices for your work.",
    createdAt: "2025-03-05T10:20:00Z",
    updatedAt: "2025-03-05T10:20:00Z",
    views: 752,
  },
  {
    id: "kb-4",
    title: "Email forwarding setup instructions",
    categoryId: "cat-5",
    excerpt:
      "How to configure email forwarding to ensure you never miss important messages.",
    createdAt: "2025-01-12T09:45:00Z",
    updatedAt: "2025-04-05T11:30:00Z",
    views: 631,
  },
  {
    id: "kb-5",
    title: "Common printer troubleshooting steps",
    categoryId: "cat-3",
    excerpt:
      "Solutions to the most frequent issues encountered with office printers and scanners.",
    createdAt: "2025-02-28T15:10:00Z",
    updatedAt: "2025-03-15T13:25:00Z",
    views: 529,
  },
  {
    id: "kb-6",
    title: "Setting up multi-factor authentication",
    categoryId: "cat-6",
    excerpt:
      "Enhance your account security by enabling multi-factor authentication for your company account.",
    createdAt: "2025-03-20T11:30:00Z",
    updatedAt: "2025-04-12T10:15:00Z",
    views: 476,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-muted-foreground">
            Search for solutions and self-help articles
          </p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </div>

      <div className="relative max-w-3xl mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search knowledge base..."
          className="pl-10 py-6 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-4">
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            Categories
          </TabsTrigger>
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <BookOpenText className="h-4 w-4" />
            Articles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.length === 0 ? (
              <div className="col-span-3 py-8 text-center">
                <p className="text-lg font-medium">No categories found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search term
                </p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <FolderOpen className="h-5 w-5 text-zenith-600" />
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between text-sm text-muted-foreground">
                    <span>
                      {category.articleCount}{" "}
                      {category.articleCount === 1 ? "article" : "articles"}
                    </span>
                    <Button variant="link" size="sm" className="text-zenith-600">
                      View All
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="articles">
          <div className="space-y-4">
            {filteredArticles.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-lg font-medium">No articles found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search term
                </p>
              </div>
            ) : (
              filteredArticles.map((article) => {
                const category = categories.find((c) => c.id === article.categoryId);
                
                return (
                  <Card key={article.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl hover:text-zenith-600 transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-sm mt-1">
                            {category?.name} • {article.views.toLocaleString()} views •
                            Updated {formatDate(article.updatedAt)}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="text-zenith-600">
                          Read
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KnowledgeBase;
