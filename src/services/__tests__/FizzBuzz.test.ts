import { beforeEach, describe, expect, test, vi } from "vitest";
import FizzBuzz from "../FizzBuzz";

describe("Fizz Buzz", (): void => {
  let fizzBuzz: FizzBuzz;

  beforeEach((): void => {
    vi.clearAllMocks();
    fizzBuzz = new FizzBuzz();
  });

  test.each([[0], [101]])(
    "Input (%i) > throw error not include in [1, 100]",
    (numberOfLines: number): void => {
      // When
      const printLines: Function = () => fizzBuzz.printLines(numberOfLines);

      // Then
      expect(() => printLines()).toThrowError(
        "Number of lines must be include in [1, 100]."
      );
    }
  );

  test.each([[1], [100]])("Print %i lines", (numberOfLines: number): void => {
    // When
    const lines: string = fizzBuzz.printLines(numberOfLines);

    // Then
    expect(lines.split("\n").length - 1).toEqual(numberOfLines);
  });

  test.each([[3], [6], [9], [21]])(
    "Input (%i) is Fizz",
    (number: number): void => {
      // When
      const isFizz: boolean = fizzBuzz.isFizz(number);

      // Then
      expect(isFizz).toBeTruthy();
    }
  );

  test.each([[5], [10], [15], [50]])(
    "Input (%i) is Buzz",
    (number: number): void => {
      // When
      const isBuzz: boolean = fizzBuzz.isBuzz(number);

      // Then
      expect(isBuzz).toBeTruthy();
    }
  );

  test.each([[30], [60]])("Input (%i) is FizzBuzz", (number: number): void => {
    // When
    const isFizzBuzz: boolean = fizzBuzz.isFizzBuzz(number);

    // Then
    expect(isFizzBuzz).toBeTruthy();
  });

  test("Fizz Buzz FizzBuzz number", (): void => {
    // Given
    const numebrOfLines: number = 15;

    // When
    const lines: string = fizzBuzz.printLines(numebrOfLines);

    // Then
    expect(lines).toEqual(
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n"
    );
  });
});
