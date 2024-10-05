import apiClient from '../utils/apiClient';
import { Podcast } from '../types/podcast';

class PodcastService {
  async getAllPodcasts(page: number = 1, limit: number = 10): Promise<Podcast[]> {
    const response = await apiClient.get<Podcast[]>('/podcasts', {
      params: { page, limit },
    });
    return response.data;
  }

  async searchPodcasts(query: string, page: number = 1, limit: number = 10): Promise<Podcast[]> {
    const response = await apiClient.get<Podcast[]>('/podcasts', {
      params: { search: query, page, limit },
    });
    return response.data;
  }
}

export default new PodcastService();