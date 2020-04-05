import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SECRET = 'edteam'

export const getUserId = request => {
  const header = request.get('authorization')

  if (header) {
    const token = header.replace('Bearer ', '')
    const { userId } = jwt.verify(token, SECRET)

    return userId
  }

  throw new Error('Authentication required')
}

export const hashPassword = async password => {
  if (password.length < 6) {
    throw new Error('Password must be 6 characters or longer')
  }

  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export const validatePassword = async (requestPassword, password) => {
  return await bcrypt.compare(requestPassword, password)
}

export const generateToken = userId => {
  return jwt.sign({ userId }, SECRET, { expiresIn: '2 days' })
}
