import { Schema, model, models } from 'mongoose';

const publicationSchema = new Schema(
  {
    id: { type: String, unique: true, required: [true, 'id is required'] },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    image: { type: String, required: [true, 'Image is required'] },
    userId: {
      type: String,
      required: [true, 'User id is required'],
    },
  },
  { timestamps: true }
);

const Publication =
  models.Publication || model('Publication', publicationSchema);
export default Publication;
