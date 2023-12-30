import { Schema, model, models } from 'mongoose';

const publicationSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    image: { type: String, required: [true, 'Image is required'] },
  },
  { timestamps: true }
);

const Publication =
  models.Publication || model('Publication', publicationSchema);
export default Publication;
