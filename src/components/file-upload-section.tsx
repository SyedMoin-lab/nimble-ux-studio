
"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadSection() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Upload Your Files
          </h2>
          <p className="text-lg text-muted-foreground">
            Easily upload and manage your files with our intuitive drag-and-drop interface
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-background border-neutral-200 dark:border-neutral-800 rounded-lg">
          <FileUpload onChange={handleFileUpload} />
        </div>
      </div>
    </section>
  );
}
