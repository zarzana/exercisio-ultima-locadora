import prisma from "database";
import { faker } from "@faker-js/faker";

export async function createUser(dateOfBirth: Date) {
  return prisma.user.create({
    data: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      cpf: faker.string.numeric(11),
      birthDate: dateOfBirth
    }
  })
}