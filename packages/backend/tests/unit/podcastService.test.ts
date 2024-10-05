import podcastService from '../../src/services/podcastService';
import apiClient from '../../src/utils/apiClient';

jest.mock('../../src/utils/apiClient');

describe('PodcastService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('getAllPodcasts should return podcasts', async () => {
    const mockPodcasts = [{ id: '1', title: 'Test Podcast', description: 'Test Description', category: 'Test' }];
    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockPodcasts });

    const result = await podcastService.getAllPodcasts();
    expect(result).toEqual(mockPodcasts);
    expect(apiClient.get).toHaveBeenCalledWith('/podcasts', { params: { page: 1, limit: 10 } });
  });

  // Add more tests for searchPodcasts and error scenarios
});