import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PodcastCardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{Array(5).fill(0).map((_, index) => (
              <div key={index}>
              
              <Card className="h-full flex flex-col">
      <CardHeader>
        <Skeleton className="w-full h-48 rounded-t-lg" />
        <Skeleton className="h-6 w-3/4 mt-2" />
        <div className="flex items-center space-x-2 mt-1">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
        </div>
      </CardContent>
    </Card></div>
            ))
            }

</div>
 
  );
}