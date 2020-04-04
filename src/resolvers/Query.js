const Query = {
  hello: (parent, args, ctx, info) => {
    const { name } = args

    return `Hello ${name || 'world'}`
  },
  quantity: () => 1,
  user: (parent, { id }, { prisma }, info) => {
    if (!id) {
      return prisma.users.findMany()
    }

    return prisma.users.findOne({
      where: {
        id,
      },
    })
  },
  author: (parent, { id }, { prisma }, info) => {
    if (!id) {
      return prisma.authors.findMany()
    }

    return prisma.authors.findOne({
      where: {
        id,
      },
    })
  },
  book: (parent, { id }, { prisma }, info) => {
    if (!id) {
      return prisma.books.findMany()
    }

    return prisma.books.findOne({
      where: {
        id,
      },
    })
  },
}

export default Query
