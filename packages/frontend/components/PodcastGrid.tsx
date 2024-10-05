import React from 'react';
import { Podcast } from '@/types/podcast';
import PodcastCard from './PodcastCard';

interface PodcastGridProps {
  podcasts: Podcast[];
}

export default function PodcastGrid({ podcasts }: PodcastGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}