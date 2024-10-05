import { Podcast } from '@/types/podcast';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getPodcasts(page = 1, limit = 10, category?: string | null): Promise<Podcast[]> {
  const url = new URL(`${API_BASE_URL}/podcasts`);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  if (category) url.searchParams.append('category', category);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error('Failed to fetch podcasts');
  }
  return res.json();
}

export async function searchPodcasts(query: string, page = 1, limit = 10, category?: string | null): Promise<Podcast[]> {
  const url = new URL(`${API_BASE_URL}/podcasts/search`);
  url.searchParams.append('query', query);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  if (category) url.searchParams.append('category', category);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error('Failed to search podcasts');
  }
  return res.json();
}