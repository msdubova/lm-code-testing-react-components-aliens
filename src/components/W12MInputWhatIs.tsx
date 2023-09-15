import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const W12MInputWhatIs: React.FC<{ validate: (value: string) => string[] }> = ({
  validate,
}) => {
  const [whatIs, setWhatIs] = useState("");

  const handleWhatIsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWhatIs(event.target.value);
  };

  const errorMessages = validate(whatIs);
  const errorMessage = errorMessages.join(", ");

  return (
    <div>
      <label htmlFor="whatIs">What is 2+2?</label>
      <select id="whatIs" value={whatIs} onChange={handleWhatIsChange}>
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default W12MInputWhatIs;
