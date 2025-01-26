import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, FileText, CalendarDays, Citation } from "lucide-react";

export function PaperGrid({ papers }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {papers.map((paper) => (
        <Card
          key={paper.id}
          className="flex flex-col hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-200 group"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {paper.title}
              </CardTitle>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              {paper.authors}
            </p>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between space-y-4">
            <p className="text-sm text-gray-600 line-clamp-3">
              {paper.abstract}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-gray-500" />
                <Badge variant="outline" className="text-xs">
                  {paper.date}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <div className="w-4 h-4" />
                {paper.citations}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
