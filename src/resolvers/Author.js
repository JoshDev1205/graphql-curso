const Author = {
  register_by: (parent, args, { prisma }, info) => {
    return prisma.authors
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .users()
  },
  books: (parent, args, { prisma }, info) => {
    return prisma.authors
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .books()
  },
}

export default Author
