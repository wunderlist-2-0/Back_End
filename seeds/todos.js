
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'test todo', task: 'more todo test', notes: 'extra todo content', completed: false, userId: 4}
      ]);
    });
};
