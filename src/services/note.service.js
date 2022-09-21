import Note from '../models/note.model';

//create new note
export const newNote = async (body) => {
    console.log(body)
    const note = await Note.create(body);
    return note;
  };