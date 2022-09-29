import { required } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email:
    {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required:true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
