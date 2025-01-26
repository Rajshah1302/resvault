import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const demoResearchPapers = [
  {
    id: 1,
    title: "Quantum Entanglement in Distributed Systems",
    abstract:
      "This paper explores the potential applications of quantum entanglement in distributed computing systems...",
    date: "2023-05-15",
    citations: 42,
  },
  {
    id: 2,
    title: "Machine Learning Approaches to Climate Modeling",
    abstract:
      "We present novel machine learning techniques for improving the accuracy of climate models...",
    date: "2023-03-22",
    citations: 28,
  },
  {
    id: 3,
    title: "Blockchain Technology in Supply Chain Management",
    abstract:
      "This study investigates the implementation of blockchain technology to enhance transparency and efficiency in supply chain management...",
    date: "2023-01-10",
    citations: 35,
  },
  {
    id: 4,
    title: "Advancements in Natural Language Processing",
    abstract:
      "Our research presents cutting-edge techniques in natural language processing, focusing on improved sentiment analysis and context understanding...",
    date: "2022-11-05",
    citations: 50,
  },
];

export function ResearchPaperGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {demoResearchPapers.map((paper) => (
        <Card key={paper.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">{paper.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground mb-4">
              {paper.abstract}
            </p>
            <div className="flex justify-between items-center">
              <Badge variant="outline">{paper.date}</Badge>
              <span className="text-sm text-muted-foreground">
                {paper.citations} citations
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
