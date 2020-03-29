const Book = {
  writted_by: (parent, args, { db }, info) => {
    return db.authors.find(author => author.id === parent.writted_by)
  },
  register_by: (parent, args, { db }, info) => {
    return db.users.find(user => user.id === parent.register_by)
  },
}

export default Book
