import { Request, Response, NextFunction } from 'express';
import podcastService from '../services/podcastService';

export const getAllPodcasts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const podcasts = await podcastService.getAllPodcasts(page, limit);
    res.json(podcasts);
  } catch (error) {
    next(error);
  }
};

export const searchPodcasts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = String(req.query.query);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const podcasts = await podcastService.searchPodcasts(query, page, limit);
    res.json(podcasts);
  } catch (error) {
    next(error);
  }
};