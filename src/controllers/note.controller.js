import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';


// create a note
export const newNote = async (req, res, next) => {
  try {
    const data = await NoteService.newNote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'new note created.... successfully '
    });
  } catch (error) {
    next(error);
  }
};


// get all note 
export const getAllNote = async (req, res, next) => {
  try {
    const data = await NoteService.getAllNote(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Note fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

// get a note 
export const getNote = async (req, res, next) => {
  try {
    const data = await NoteService.getNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};



 export const updateNote = async (req, res, next) => {
  try {
    const data = await NoteService.updateNote(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Note updated successfully.....'
    });
  } catch (error) {
    next(error);
  }
};


// Controller to Delete a Note by Id
export const deleteNote = async (req, res, next) => {
  try {
    await NoteService.deleteNote(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Note deleted successfully.....'
    });
    console.log("Note Deleted..... ")
  } catch (error) {
    next(error);
  }
};