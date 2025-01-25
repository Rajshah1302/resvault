import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"


export function PaperCard({ id, title, abstract, authors, publishedDate, journal, citations }) {
  return (
    <Link href={`/paper/${id}`} passHref>
        <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle className="line-clamp-2">{title}</CardTitle>
            <CardDescription>
              {journal} • {new Date(publishedDate).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3 text-sm text-muted-foreground">{abstract}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {authors.map((author, index) => (
                <Badge key={index} variant="secondary">
                  {author}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Citations: {citations}</p>
          </CardFooter>
        </Card>
    </Link>
  )
}

