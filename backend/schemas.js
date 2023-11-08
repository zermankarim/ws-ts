const { Schema,mongoose } = require('mongoose');

const post = new Schema({
  authorID: String,
  text: String,
  likes: [String],
  image: String,
  subscribesIds: [String],
  comments: [
    {
      id: String,
      authorID: String,
      text: String,
    }
  ]
});

const user = new Schema({
  name: String,
  email: String,
  password: String,
  image: String,
});

const Posts = mongoose.model('posts', post);
const Users = mongoose.model('users', user);

module.exports = {
  Posts,
  Users,
}