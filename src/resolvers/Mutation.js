import { v4 as uuidv4 } from 'uuid'

const Mutation = {
  createUser: (parent, { data }, { db }, info) => {
    const isEmailTaken = db.users.some(user => user.email === data.email)

    if (isEmailTaken) {
      throw new Error('Email Taken')
    }

    const user = {
      id: uuidv4(),
      ...data,
    }

    db.users.push(user)

    return user
  },
  updateUser: (parent, { id, data }, { db }, info) => {
    const userExist = db.users.find(user => user.id === id)

    if (!userExist) {
      throw new Error('User not found')
    }

    const isEmailTaken = db.users.some(user => user.email === data.email)

    if (isEmailTaken) {
      throw new Error('Email Taken')
    }

    db.users = db.users.map(user => {
      if (user.id === id) {
        user = { ...user, ...data }
        return user
      }

      return user
    })

    return { ...userExist, ...data }
  },
  createAuthor: (parent, { data }, { db }, info) => {
    const author = {
      id: uuidv4(),
      ...data,
    }

    db.authors.push(author)

    return author
  },
  updateAuthor: (parent, { id, data }, { db }, info) => {
    const authorExist = db.authors.find(author => author.id === id)

    if (!authorExist) {
      throw new Error('Author does not exist')
    }

    db.authors = db.authors.map(author => {
      if (author.id === id) {
        author = { ...author, ...data }
        return author
      }

      return author
    })

    return { ...authorExist, ...data }
  },
  createBook: (parent, { data }, { db }, info) => {
    const book = {
      id: uuidv4(),
      ...data,
    }

    db.books.push(book)

    return book
  },
  updateBook: (parent, { id, data }, { db }, info) => {
    const bookExist = db.books.find(book => book.id === id)

    if (!bookExist) {
      throw new Error('Book not found')
    }

    db.books = db.books.map(book => {
      if (book.id === id) {
        book = { ...book, ...data }
        return book
      }

      return book
    })

    return { ...bookExist, ...data }
  },

  deleteBook: (parent, { id }, { db }, info) => {
    const bookExist = db.books.find(book => book.id === id)

    if (!bookExist) {
      throw new Error('Book not found')
    }

    db.books = db.books.reduce((acc, book) => {
      if (book.id !== id) {
        acc.push(book)
      }

      return acc
    }, [])

    return bookExist
  },
}

export default Mutation
