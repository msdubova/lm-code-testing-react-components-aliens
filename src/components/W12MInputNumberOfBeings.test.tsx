import { render, screen } from "@testing-library/react";
import W12MInputNumberOfBeings from "./W12MInputNumberOfBeings";
import validateNumberOfBeings from "./validateNumberOfBeings";

const mockValidate = (value: string) => {
  return [];
};
test("input fields certain values through props, do they display that value?", () => {
  const initialValue = "42";

  render(
    <W12MInputNumberOfBeings
      state={initialValue}
      setState={() => {}}
      validate={mockValidate}
    />
  );

  const inputElement = screen.getByLabelText(
    "Number Of Beings"
  ) as HTMLInputElement;

  expect(inputElement.value).toBe(initialValue);
});

test("validation returns errors for invalid values - string", () => {
  const invalidNumberOfBeings: any = "A";

  const validationErrors = validateNumberOfBeings(invalidNumberOfBeings);

  expect(validationErrors).toEqual([
    "Number of beings must be a valid number.",
  ]);
});
test("validation returns errors for invalid values - low number", () => {
  const invalidNumberOfBeings = 1;

  const validationErrors = validateNumberOfBeings(invalidNumberOfBeings);

  expect(validationErrors).toEqual([
    "Number of beings must be at least 1,000,000,000.",
  ]);
});
test("validation doesn't return errors for valid values", () => {
  const validNumberOfBeings = 1000000001;

  const validationErrors = validateNumberOfBeings(validNumberOfBeings);

  expect(validationErrors).toEqual([]);
});
