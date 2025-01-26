import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { PaperGrid } from "./paper-grid";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function PaperLibraryPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Paper Library</CardTitle>
            <CardDescription>
              Discover popular papers and personalized recommendations
            </CardDescription>
          </CardHeader>
        </Card>

        <Tabs defaultValue="popular" className="space-y-4">
          <TabsList>
            <TabsTrigger value="popular">Popular Papers</TabsTrigger>
            <TabsTrigger value="for-you">For You</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <PaperGrid papers={popularPapers} />
          </TabsContent>
          <TabsContent value="for-you">
            <PaperGrid papers={recommendedPapers} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const popularPapers = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Healthcare",
    authors: "Smith, J., Johnson, M., Williams, R.",
    abstract:
      "This paper explores the potential applications and implications of AI in the healthcare industry...",
    date: "2023-06-01",
    citations: 120,
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions for Urban Environments",
    authors: "Brown, A., Davis, L., Wilson, E.",
    abstract:
      "We present innovative approaches to implementing sustainable energy solutions in densely populated urban areas...",
    date: "2023-05-15",
    citations: 85,
  },
  {
    id: 3,
    title: "Advancements in Quantum Computing Algorithms",
    authors: "Lee, S., Garcia, M., Taylor, K.",
    abstract:
      "This study presents recent breakthroughs in quantum computing algorithms and their potential impact on cryptography...",
    date: "2023-04-22",
    citations: 150,
  },
  {
    id: 4,
    title: "The Impact of Social Media on Mental Health",
    authors: "Anderson, P., Martinez, C., Thompson, G.",
    abstract:
      "Our research investigates the long-term effects of social media usage on mental health across different age groups...",
    date: "2023-03-10",
    citations: 200,
  },
];

const recommendedPapers = [
  {
    id: 7,
    title:
      "Advancements in Natural Language Processing for Multilingual Communication",
    authors: "Kim, J., Silva, M., Al-Farsi, O.",
    abstract:
      "This study presents cutting-edge NLP techniques for improving cross-lingual communication and translation...",
    date: "2023-03-05",
    citations: 110,
  },
  {
    id: 8,
    title: "The Impact of Remote Work on Organizational Productivity",
    authors: "Larsson, E., Dubois, C., Cheng, W.",
    abstract:
      "Our research investigates how the shift to remote work has affected organizational productivity and employee well-being...",
    date: "2023-02-20",
    citations: 130,
  },
];
