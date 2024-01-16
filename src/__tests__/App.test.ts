import { beforeEach, describe, expect, test, vi } from "vitest";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import AppVue from "../App.vue";

/**
 * @vitest-environment jsdom
 */

describe("App", (): void => {
  let wrapper: VueWrapper;
  const dataTestInputNumberOfLines: string = "input_numberOfLines";

  beforeEach((): void => {
    vi.clearAllMocks();
    wrapper = shallowMount(AppVue);
  });

  test("Show error when number is not include in [1, 100]", async (): Promise<void> => {
    // Given
    const input = wrapper.find(`[data-testid="${dataTestInputNumberOfLines}"]`);
    const dataTestMsgError: string = "msg_error";
    const msgError = wrapper.find(`[data-testid="${dataTestMsgError}"]`);

    // When
    input.setValue(0);

    await wrapper.vm.$nextTick();

    // Then
    expect(msgError.text()).toEqual(
      "Number of lines must be include in [1, 100]."
    );
  });

  test("Show Fizz Buzz FizzBuzz number", async (): Promise<void> => {
    // Given
    const input = wrapper.find(`[data-testid="${dataTestInputNumberOfLines}"]`);
    const dataTestFizzBuzzLines: string = "lines_fizzBuzz";
    const fizzBuzz = wrapper.find(`[data-testid="${dataTestFizzBuzzLines}"]`);

    // When
    input.setValue(15);

    await wrapper.vm.$nextTick();

    // Then
    expect(fizzBuzz.text()).toEqual(
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"
    );
  });
});
