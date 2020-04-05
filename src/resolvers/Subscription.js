import { getUserId } from '../utils'

const Subscription = {
  count: {
    subscribe(parent, args, { pubsub }, info) {
      let count = 0

      setInterval(() => {
        count++
        pubsub.publish('count', {
          count,
        })
      }, 1000)

      return pubsub.asyncIterator('count')
    },
  },
  author: {
    subscribe(parent, args, { request, pubsub }, info) {
      const userId = getUserId(request)
      return pubsub.asyncIterator('author')
    },
  },
  book: {
    subscribe(parent, { authorId }, { request, pubsub }, info) {
      const userId = getUserId(request)
      return pubsub.asyncIterator(`book - ${authorId}`)
    },
  },
}

export default Subscription
