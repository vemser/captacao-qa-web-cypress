import faker from '@faker-js/faker'

export default {
  email: faker.internet.email(),
  password: faker.internet.password()
}