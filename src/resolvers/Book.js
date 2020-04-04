const Book = {
  writted_by: (parent, args, { prisma }, info) => {
    return prisma.books
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .authors()
  },
  register_by: (parent, args, { prisma }, info) => {
    return prisma.books
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .users()
  },
}

export default Book
