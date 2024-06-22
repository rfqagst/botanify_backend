import express from 'express';
import { 
    getAllCollections, 
    getCollectionById, 
    getCollectionByUserId, 
    createCollection, 
    updateCollection, 
    deleteCollection 
} from '../controllers/koleksiController.js';

const router = express.Router();

router.get('/', getAllCollections);
router.get('/user/:userId', getCollectionByUserId); 
router.get('/:id', getCollectionById);
router.post('/', createCollection);
router.put('/:id', updateCollection);
router.delete('/:id', deleteCollection);

export default router;
