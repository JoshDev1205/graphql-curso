const Mutation = {
  createUser: (parent, { data }, { prisma }, info) => {
    return prisma.users.create({
      data,
    })
  },
  updateUser: (parent, { id, data }, { prisma }, info) => {
    return prisma.users.update({
      where: { id },
      data,
    })
  },
  createAuthor: async (parent, { data }, { prisma, pubsub }, info) => {
    const { register_by, ...rest } = data

    const newAuthor = await prisma.authors.create({
      data: {
        ...rest,
        users: {
          connect: {
            id: Number(register_by),
          },
        },
      },
    })

    pubsub.publish('author', {
      author: {
        mutation: 'CREATED',
        data: newAuthor,
      },
    })
    return newAuthor
  },
  updateAuthor: async (parent, { id, data }, { prisma }, info) => {
    const { register_by } = data

    if (register_by) {
      data.users = {
        connect: {
          id: Number(register_by),
        },
      }
    }

    const authorUpdated = await prisma.authors.update({
      where: {
        id: Number(id),
      },
      data,
    })

    pubsub.publish('author', {
      author: {
        mutation: 'UPDATED',
        data: authorUpdated,
      },
    })

    return authorUpdated
  },
  createBook: async (parent, { data }, { prisma, pubsub }, info) => {
    const { writted_by, register_by, ...rest } = data

    const newBook = await prisma.books.create({
      data: {
        ...rest,
        authors: {
          connect: {
            id: Number(writted_by),
          },
        },
        users: {
          connect: {
            id: Number(register_by),
          },
        },
      },
    })

    pubsub.publish(`book - ${newBook.writted_by}`, {
      book: {
        mutation: 'CREATED',
        data: newBook,
      },
    })

    return newBook
  },
  updateBook: async (parent, { id, data }, { prisma, pubsub }, info) => {
    const { writted_by, register_by } = data

    if (writted_by) {
      data.authors = {
        connect: {
          id: Number(writted_by),
        },
      }
    }

    if (register_by) {
      data.users = {
        connect: {
          id: Number(register_by),
        },
      }
    }

    const bookUpdated = await prisma.books.update({
      where: {
        id: Number(id),
      },
      data,
    })

    pubsub.publish(`book - ${bookUpdated.writted_by}`, {
      book: {
        mutation: 'UPDATED',
        data: bookUpdated,
      },
    })

    return bookUpdated
  },

  deleteBook: async (parent, { id }, { prisma, pubsub }, info) => {
    const bookDeleted = await prisma.books.delete({
      where: {
        id: Number(id),
      },
    })

    pubsub.publish(`book - ${bookDeleted.writted_by}`, {
      book: {
        mutation: 'DELETED',
        data: bookDeleted,
      },
    })

    return bookDeleted
  },
}

export default Mutation
