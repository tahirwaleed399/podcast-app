"use client"
import React, { useState, useMemo } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDebounce } from 'use-debounce';
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Podcast } from '@/types/podcast';
import { getPodcasts, searchPodcasts } from '@/lib/api';
import LoadingSpinner from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import PodcastCard from '@/components/PodcastCard';

const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const [useInfiniteScroll, setUseInfiniteScroll] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPodcasts = async ({ pageParam = 1 }) => {
    if (debouncedSearchQuery) {
      return searchPodcasts(debouncedSearchQuery, pageParam, ITEMS_PER_PAGE);
    } else {
      return getPodcasts(pageParam, ITEMS_PER_PAGE);
    }
  };

  const infiniteQuery = useInfiniteQuery({
    queryKey: ['podcasts', debouncedSearchQuery, 'infinite'],
    queryFn: fetchPodcasts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === ITEMS_PER_PAGE ? allPages.length + 1 : undefined;
    },
    enabled: useInfiniteScroll,
  });

  const paginatedQuery = useQuery({
    queryKey: ['podcasts', debouncedSearchQuery, 'paginated', currentPage],
    queryFn: () => fetchPodcasts({ pageParam: currentPage }),
    enabled: !useInfiniteScroll,
  });

  const allPodcasts = useMemo(() => {
    if (useInfiniteScroll) {
      return infiniteQuery.data?.pages.flatMap(page => page) ?? [];
    } else {
      return paginatedQuery.data ?? [];
    }
  }, [useInfiniteScroll, infiniteQuery.data, paginatedQuery.data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const isLoading = useInfiniteScroll ? infiniteQuery.isLoading : paginatedQuery.isLoading;
  const isError = useInfiniteScroll ? infiniteQuery.isError : paginatedQuery.isError;
  const error = useInfiniteScroll ? infiniteQuery.error : paginatedQuery.error;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Podcast Directory</h1>
      <div className="mb-4 flex space-x-4">
        <Input
          type="text"
          placeholder="Search podcasts..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full"
        />
        <div className="flex items-center space-x-2 min-w-max">
          <span>Infinite Scroll</span>
          <Switch
            checked={useInfiniteScroll}
            onCheckedChange={setUseInfiniteScroll}
          />
        </div>
      </div>
      
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage message={(error as Error).message} />}
      
      {useInfiniteScroll ? (
        <InfiniteScroll
          dataLength={allPodcasts.length}
          next={infiniteQuery.fetchNextPage}
          hasMore={!!infiniteQuery.hasNextPage}
          loader={<LoadingSpinner />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allPodcasts.map((podcast: Podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allPodcasts.map((podcast: Podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <Button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</Button>
            <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
            <span>Page {currentPage}</span>
            <Button onClick={() => handlePageChange(currentPage + 1)} disabled={allPodcasts.length < ITEMS_PER_PAGE}>Next</Button>
          </div>
        </>
      )}
    </main>
  );
}