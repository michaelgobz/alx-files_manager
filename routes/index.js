// eslint-disable-next-line no-unused-vars
import express from 'express';
import AppController from '../controllers/AppController';
import AuthController from '../controllers/AuthController';
import UsersController from '../controllers/UsersController';
import FilesController from '../controllers/FilesController';

const router = express.Router();

// GETs
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/users/me', UsersController.getMe);
router.get('/files/:id', FilesController.getShow);
router.get('/files', FilesController.getIndex);
router.get('/files/:id/data', FilesController.getFile);

// POSTs
router.post('/users', UsersController.postNew);
router.post('/files', FilesController.postUpload);

// PUTs
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/unpublish', FilesController.putUnpublish);

module.exports = router;
