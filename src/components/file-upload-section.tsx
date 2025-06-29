
"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Trash2, Upload } from "lucide-react";

export function FileUploadSection() {
  const [files, setFiles] = useState<File[]>([]);
  
  const handleFileUpload = (newFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    console.log(newFiles);
  };

  const handleDeleteFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleReupload = () => {
    setFiles([]);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Upload Your Files
          </h2>
          <p className="text-lg text-muted-foreground">
            Easily upload and manage your files with our intuitive drag-and-drop interface
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Upload area and features */}
          <div className="space-y-6">
            <div className="w-full border border-dashed bg-background border-neutral-200 dark:border-neutral-800 rounded-lg">
              <FileUpload onChange={handleFileUpload} />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose Our Platform?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lightning-fast upload speeds with advanced compression</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Bank-level security with end-to-end encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Support for all major file formats and sizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automatic backup and version control</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Uploaded files */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">
                Uploaded Files ({files.length})
              </h3>
              {files.length > 0 && (
                <Button 
                  onClick={handleReupload}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Re-upload All
                </Button>
              )}
            </div>
            
            <div className="min-h-[400px] border border-border rounded-lg p-4 bg-card">
              {files.length === 0 ? (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No files uploaded yet</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {file.name}
                        </p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-muted-foreground">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </span>
                          <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
                            {file.type || 'Unknown'}
                          </span>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleDeleteFile(index)}
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
