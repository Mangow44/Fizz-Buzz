<script setup lang="ts">
import { ref } from "vue";
import FizzBuzz from "./services/FizzBuzz";

const fizzBuzz = new FizzBuzz();
const numberOfLines = ref<number>(1);
const error = ref<string>("");

function printFizzBuzz(numberOfLines: number): string {
  let result: string = "";

  try {
    result = fizzBuzz.printLines(numberOfLines);
    error.value = "";
  } catch (e: any) {
    error.value = e.message;
  }

  return result;
}
</script>

<template>
  <h1>Fizz Buzz</h1>

  <div>
    <label for="numberOfLines">Nombre de lignes : </label>
    <input
      data-testid="input_numberOfLines"
      id="numberOfLines"
      type="number"
      v-model="numberOfLines"
    />
  </div>

  <p data-testid="msg_error">{{ error }}</p>

  <p data-testid="lines_fizzBuzz">
    {{ printFizzBuzz(numberOfLines) }}
  </p>
</template>
