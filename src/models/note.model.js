import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Descreption: {
            type: String,
            required: true,
        },
        Colour: {
            type: String,
        },
        isArchived: {
            type: Boolean,
            default:true
            
        },
        isTrashed: {
            type: Boolean,
            default:true
        
        },
        // UserID: {
        //     type: String
        // }
    },

    {
        timestamps: true
    }
);

export default model('Note', userSchema);
