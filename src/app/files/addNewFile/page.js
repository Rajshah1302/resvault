"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertCircle, FileUp, Upload } from "lucide-react";
import { SidebarDemo } from "@/app/__components/Sidebar";

export default function AddNewFilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [fileName, setFileName] = useState("");

  const onSubmit = async (data) => {
    try {
      // Prepare the body for the request
      const requestBody = {
        name: data.name,                 // Paper Name
        description: data.description,   // Paper Description
        hash: 'sadasd',                 // File Hash
        userAddress: 'abc'   // User Address
      };
  
      // Send the request to the backend with requestBody as JSON
      console.log('Uploading metadata:', requestBody);
      const response = await axios.post('http://localhost:4000/api/files',{
        name: data.name,                 // Paper Name
        description: data.description,   // Paper Description
        hash: 'sadasd',                 // File Hash
        userAddress: 'abc'   // User Address
      });
  
      // Handle the response
      console.log('File metadata uploaded successfully:', response.data);
      alert('File metadata uploaded successfully!');
    } catch (error) {
      // Handle errors
      console.error('Error uploading metadata:', error);
      alert('Error uploading metadata. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="flex h-screen bg-neutral-900 text-neutral-100"> 
      <SidebarDemo />
    <div className="container mx-auto p-4 max-w-2xl my-20">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Add New Research Paper</CardTitle>
          <CardDescription>
            Upload a PDF file of your research paper along with its details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Paper Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Paper name is required" })}
                placeholder="Enter the name of the research paper"
                className="w-full"
              />
              {errors.name && (
                <p className="text-destructive text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Enter a brief description of the research paper"
                rows={4}
                className="w-full"
              />
              {errors.description && (
                <p className="text-destructive text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Upload PDF</Label>
              <div className="mt-1 flex items-center">
                <label
                  htmlFor="file"
                  className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md shadow-sm text-sm font-medium inline-flex items-center"
                >
                  <FileUp className="w-4 h-4 mr-2" />
                  Choose PDF file
                </label>
                <input
                  id="file"
                  type="file"
                  className="sr-only"
                  {...register("file", {
                    required: "PDF file is required",
                    validate: (value) => {
                      if (value[0]) {
                        return (
                          ["application/pdf"].includes(value[0].type) ||
                          "File must be a PDF"
                        );
                      }
                      return true;
                    },
                  })}
                  onChange={handleFileChange}
                  accept=".pdf"
                />
                <span className="ml-3 text-sm text-muted-foreground">
                  {fileName || "No file chosen"}
                </span>
              </div>
              {errors.file && (
                <p className="text-destructive text-sm flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.file.message}
                </p>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Research Paper
          </Button>
        </CardFooter>
      </Card>
    </div>
      </div>
  );
}
