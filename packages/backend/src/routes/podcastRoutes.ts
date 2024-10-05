import { Router } from 'express';
import * as podcastController from '../controllers/podcastController';

const router = Router();

router.get('/', podcastController.getAllPodcasts);
router.get('/search', podcastController.searchPodcasts);

export default router;