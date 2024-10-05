import request from 'supertest';
import app from '../../src/app';
import podcastService from '../../src/services/podcastService';

jest.mock('../../src/services/podcastService');

describe('Podcast API', () => {
  test('GET /api/podcasts should return podcasts', async () => {
    const mockPodcasts = [{ id: '1', title: 'Test Podcast', description: 'Test Description', category: 'Test' }];
    (podcastService.getAllPodcasts as jest.Mock).mockResolvedValue(mockPodcasts);

    const response = await request(app).get('/api/podcasts');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockPodcasts);
  });

  // Add more tests for search endpoint and error scenarios
});