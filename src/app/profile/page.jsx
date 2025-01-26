import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResearchPaperGrid } from "./research-paper-grid";

export default function ProfilePage() {
  // Demo user data
  const user = {
    name: "Dr. Jane Doe",
    avatar: "/placeholder.svg?height=100&width=100",
    researchPapers: 12,
    aptosTokens: 34,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Card className="mb-8">
          <CardContent className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 p-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2 text-center sm:text-left">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <Badge variant="secondary" className="text-sm">
                  {user.researchPapers} Research Papers
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {user.aptosTokens} Aptos Tokens
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Research Papers</CardTitle>
          </CardHeader>
          <CardContent>
            <ResearchPaperGrid />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
