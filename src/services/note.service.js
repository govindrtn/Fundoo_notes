// import noteModel from '../models/note.model';
import { client } from '../config/redisDataBase';
import Note from '../models/note.model';

//create new note
export const newNote = async (body) => {
  console.log(body)
  const note = await Note.create(body);
  if (note) {
    await client.del('getall')
    return note;
  }
};

//get all Note 
export const getAllNote = async () => {
  const note = await Note.find();
  if (note) {
    await client.set('getall', JSON.stringify(note))
    return note;
  }
};

//get a Note 
export const getNote = async (id) => {
  const note = await Note.findById(id);
  return note;
};

//update note by id
export const updateNote = async (_id, body) => {
  const note = await Note.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return note;
};


//delete single note by id
export const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id);
  return '';
};

//Archive note by id
export const archiveNote = async (_id) => {
  const note = await Note.findByIdAndUpdate(
    {
      _id
    },
    {
      isArchived: true
    },
    {
      new: true
    }
  );
  return note;
};


//Archive note by id
export const trashNote = async (_id) => {
  const note = await Note.findByIdAndUpdate(
    {
      _id
    },
    {
      isTrashed: true
    },
    {
      new: true
    }
  );
  return note;
};
