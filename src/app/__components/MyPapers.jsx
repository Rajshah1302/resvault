"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const dummyPapers = [
  {
    id: 1,
    title: "Quantum Computing Advancements",
    requests: 3,
    category: "Computer Science",
  },
  { id: 2, title: "AI in Healthcare", requests: 5, category: "Healthcare" },
  {
    id: 3,
    title: "Blockchain for Supply Chain",
    requests: 2,
    category: "Business",
  },
  {
    id: 4,
    title: "Machine Learning in Finance",
    requests: 4,
    category: "Finance",
  },
  {
    id: 5,
    title: "Renewable Energy Technologies",
    requests: 1,
    category: "Environmental Science",
  },
];

const dummyRequests = [
  { id: 1, name: "John Doe", email: "john@example.com", institution: "MIT" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    institution: "Stanford University",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    institution: "Harvard University",
  },
];

export default function MyPapers() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  const handleGrantAccess = (requestId) => {
    console.log(
      `Access granted for request ${requestId} on paper ${selectedPaper.id}`
    );
    // In a real application, you would update the state and make an API call here
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPapers.map((paper) => (
          <Card
            key={paper.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all hover:shadow-xl"
          >
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {paper.title}
              </h2>
              <Badge variant="secondary" className="mb-4">
                {paper.category}
              </Badge>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {paper.requests} access requests
                </span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 hover:bg-gray-50"
                      onClick={() => setSelectedPaper(paper)}
                    >
                      View Requests
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-gray-800">
                        Access Requests for {selectedPaper?.title}
                      </DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="mt-4 max-h-[60vh]">
                      <ul className="space-y-4">
                        {dummyRequests.map((request) => (
                          <li
                            key={request.id}
                            className="bg-gray-100 p-4 rounded-md shadow-sm"
                          >
                            <h3 className="font-semibold text-gray-800">
                              {request.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {request.email}
                            </p>
                            <p className="text-sm text-gray-600">
                              {request.institution}
                            </p>
                            <Button
                              size="sm"
                              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white"
                              onClick={() => handleGrantAccess(request.id)}
                            >
                              Grant Access
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-50"
                        onClick={() => setSelectedPaper(null)}
                      >
                        Close
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
