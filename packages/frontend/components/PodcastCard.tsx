import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Podcast } from '@/types/podcast';

interface PodcastCardProps {
  podcast: Podcast;
}

export default function PodcastCard({ podcast }: PodcastCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncatedDescription = podcast.description.slice(0, 150);
  const shouldTruncate = podcast.description.length > 150;

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="relative w-full h-48">
          <Image
            src={'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/271133052/original/9d2d61bc19c29c2f4ae7e2bd8da13a8e5f6ac954/design-professional-podcast-cover-art-thumbnail.jpg'}
            alt={podcast.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            
          />
        </div>
        <CardTitle className="mt-2 text-xl font-bold">{podcast.title}</CardTitle>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-gray-500">{podcast.publisherName}</span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{podcast.categoryName}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-700">
            {showFullDescription ? podcast.description : truncatedDescription}
            {shouldTruncate && !showFullDescription && '...'}
          </p>
          {shouldTruncate && (
            <Button
              variant="link"
              className="mt-2 p-0"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Show Less' : 'Show More'}
            </Button>
          )}
        </div>
        <div className="flex items-center space-x-2 mt-4">
          {podcast.isExclusive && (
            <Badge variant="secondary">Exclusive</Badge>
          )}
          {podcast.hasFreeEpisodes && (
            <Badge variant="outline">Free Episodes</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
