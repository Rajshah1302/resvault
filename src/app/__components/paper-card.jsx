import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PaperCard({ name, description, hash, User }) {
  return (
    <Card className="h-[300px] transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="line-clamp-2">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
