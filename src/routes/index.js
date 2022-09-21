import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import fundooRoute from './note.route'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome to fundoo notes');
  });
  router.use('/users', userRoute);
  router.use('/notes', fundooRoute);


  return router;
};


export default routes;
