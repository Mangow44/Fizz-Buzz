export default class FizzBuzz {
  printLines(numberOfLines: number): string {
    if (numberOfLines < 1 || numberOfLines > 100)
      throw new Error("Number of lines must be include in [1, 100].");

    let result: string = "";

    for (let i = 1; i <= numberOfLines; i++) {
      if (this.isFizzBuzz(i)) {
        result += "FizzBuzz\n";
      } else if (this.isFizz(i)) {
        result += "Fizz\n";
      } else if (this.isBuzz(i)) {
        result += "Buzz\n";
      } else {
        result += `${i}\n`;
      }
    }

    return result;
  }

  isFizz(number: number): boolean {
    return number % 3 === 0;
  }

  isBuzz(number: number): boolean {
    return number % 5 === 0;
  }

  isFizzBuzz(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }
}
