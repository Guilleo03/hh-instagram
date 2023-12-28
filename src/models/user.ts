import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, unique: true, required: [true, 'Email is required'] },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
});

const User = models.User || model('User', userSchema);
export default User;
