import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    name: { type: String, required: [true, 'Name is required'] },
    image: { type: String },
    id: { type: String, unique: true, required: [true, 'id is required'] },
  },
  { timestamps: true }
);

const User = models.User || model('User', userSchema);
export default User;
