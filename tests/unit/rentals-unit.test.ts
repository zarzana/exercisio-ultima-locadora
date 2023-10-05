import { createUser } from "../factories/user-factory";
import rentalsRepository from "repositories/rentals-repository";
import rentalsService from "services/rentals-service";
import moviesRepository from "repositories/movies-repository";

beforeEach(() => { jest.clearAllMocks() });

describe("Rentals Service Unit Tests", () => {

  it("should return InsufficientAgeError when underage user attempts to rent an adult movie", async () => {
    const user = await createUser(new Date("2008-08-08"));
    jest.spyOn(moviesRepository, "getById").mockImplementationOnce((): any => {
      return { id: 1, name: "Bob Bobson The Movie", adultsOnly: true };
    });
    const result = rentalsService.checkMoviesValidForRental([1], user);
    expect(result).rejects.toEqual({ name: "InsufficientAgeError", message: "Cannot see that movie." })
  })

})