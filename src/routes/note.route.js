import express from 'express';
import * as noteController from '../controllers/note.controller';
import { noteValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new note
router.post('/createnote' ,noteValidator ,userAuth ,noteController.newNote);

//route to get all note
router.get('/getall',userAuth, noteController.getAllNote);

// route to get a note by id 
router.get("/:_id",userAuth, noteController.getNote);

//route to update a note by their id
router.put('/:_id',userAuth, noteController.updateNote);

// route to delete a single user by their user id
router.delete('/:_id',userAuth, noteController.deleteNote);

//route to archive a note by their id
router.put('/archive/:_id',userAuth, noteController.archiveNote);

//route to trash a note by their id
router.put('/trash/:_id',userAuth, noteController.trashNote);


export default router;