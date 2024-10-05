import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NoPodcastsFoundMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function NoPodcastsFoundMessage({ message, onRetry }: NoPodcastsFoundMessageProps) {
  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardContent className="flex flex-col items-center p-6">
        <Image
          src="/assets/not-found.svg"
          alt="No podcasts found"
          width={200}
          height={200}
          className="mb-6"
        />
        <h2 className="text-2xl font-bold text-center mb-2">No Podcasts Found</h2>
        <p className="text-center text-gray-600 mb-6">{message}</p>
        {onRetry && (
          <Button 
            variant="outline" 
            onClick={onRetry}
          >
            Try Again
          </Button>
        )}
      </CardContent>
    </Card>
  );
}