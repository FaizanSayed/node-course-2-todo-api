const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '595343435db9a0478e298f39'}).then((todo) => {});

Todo.findByIdAndRemove('595343435db9a0478e298f39').then((todo) => {
  console.log(todo)
});