import { render, screen } from "@testing-library/react";
import W12MInputReasonForSparing from "./W12MInputReasonForSparing";
import validateReasonForSparing from "./validateReasonForSparing";

const mockValidate = (value: string) => {
  return [];
};
test("renders without errors", () => {
  const defaultValue = "Initial reason";

  render(
    <W12MInputReasonForSparing
      state={defaultValue}
      setState={() => {}}
      validate={mockValidate}
    />
  );

  expect(screen.getByLabelText("Reason For Sparing")).toBeInTheDocument();
});

test("validation returns errors for invalid values", () => {
  const invalidReasonForSparing = "A";

  const validationErrors = validateReasonForSparing(invalidReasonForSparing);

  expect(validationErrors).toEqual([
    "Reason for sparing must be between 17 and 153 characters.",
  ]);
});

test("validation doesn't return errors for valid values", () => {
  const validReasonForSparing =
    "Promotes peace, fosters understanding, potential for knowledge exchange, ethical responsibility, avoids conflicts..";

  const validationErrors = validateReasonForSparing(validReasonForSparing);

  expect(validationErrors).toEqual([]);
});
