
"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Trash2, Upload, ChevronLeft, ChevronRight } from "lucide-react";

export function FileUploadSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleFileUpload = (newFiles: File[]) => {
    // Only accept image files
    const imageFiles = newFiles.filter(file => 
      file.type.startsWith('image/') && 
      (file.type.includes('png') || file.type.includes('jpg') || file.type.includes('jpeg') || file.type.includes('gif'))
    );
    setFiles(prevFiles => [...prevFiles, ...imageFiles]);
    console.log(imageFiles);
  };

  const handleDeleteFile = (index: number) => {
    setFiles(prevFiles => {
      const newFiles = prevFiles.filter((_, i) => i !== index);
      if (currentImageIndex >= newFiles.length && newFiles.length > 0) {
        setCurrentImageIndex(newFiles.length - 1);
      } else if (newFiles.length === 0) {
        setCurrentImageIndex(0);
      }
      return newFiles;
    });
  };

  const handleReupload = () => {
    setFiles([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % files.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + files.length) % files.length);
  };

  return (
    <section id="upload" className="py-8 sm:py-12 px-4 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3 animate-fade-in">
            Upload Your Images
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground animate-fade-in max-w-xl mx-auto">
            Upload PNG, JPG, or GIF images with our drag-and-drop interface
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left side - Upload area and features */}
          <div className="space-y-4 animate-fade-in">
            <div className="w-full border border-dashed bg-background border-neutral-200 dark:border-neutral-800 rounded-lg">
              <FileUpload onChange={handleFileUpload} />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Why Choose Our Platform?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Lightning-fast upload speeds with advanced compression</span>
                </li>
                <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Bank-level security with end-to-end encryption</span>
                </li>
                <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Support for PNG, JPG, and GIF formats</span>
                </li>
                <li className="flex items-start gap-2 hover:text-foreground transition-colors">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Automatic backup and version control</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Image previews with carousel */}
          <div className="space-y-3 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Image Preview
              </h3>
              {files.length > 0 && (
                <Button 
                  onClick={handleReupload}
                  variant="outline"
                  size="sm"
                  className="gap-1 text-xs"
                >
                  <Upload className="h-3 w-3" />
                  Clear All
                </Button>
              )}
            </div>
            
            <div className="min-h-[300px] sm:min-h-[400px] border border-border rounded-lg p-3 bg-card">
              {files.length === 0 ? (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center">
                    <Upload className="h-8 w-8 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">No images uploaded yet</p>
                    <p className="text-xs mt-1">Supports PNG, JPG, GIF</p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col">
                  {/* Image carousel */}
                  <div className="flex-1 relative">
                    <img 
                      src={URL.createObjectURL(files[currentImageIndex])} 
                      alt={files[currentImageIndex].name}
                      className="w-full h-full object-contain rounded-md"
                    />
                    
                    {/* Navigation arrows */}
                    {files.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    
                    {/* Image counter */}
                    {files.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {currentImageIndex + 1} / {files.length}
                      </div>
                    )}
                  </div>
                  
                  {/* Image info and controls */}
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <p className="text-sm font-medium text-foreground truncate">
                          {files[currentImageIndex].name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(files[currentImageIndex].size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleDeleteFile(currentImageIndex)}
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-1 flex-1"
                      >
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </Button>
                      <Button
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = 'image/png,image/jpg,image/jpeg,image/gif';
                          input.onchange = (e) => {
                            const newFile = (e.target as HTMLInputElement).files?.[0];
                            if (newFile) {
                              const newFiles = [...files];
                              newFiles[currentImageIndex] = newFile;
                              setFiles(newFiles);
                            }
                          };
                          input.click();
                        }}
                        variant="ghost"
                        size="sm"
                        className="gap-1 flex-1"
                      >
                        <Upload className="h-3 w-3" />
                        Replace
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
