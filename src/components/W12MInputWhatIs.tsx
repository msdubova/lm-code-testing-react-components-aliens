import { useState } from "react";

const W12MInputWhatIs: React.FC = () => {
  const [whatIs, setWhatIs] = useState("");

  const handleWhatIsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWhatIs(event.target.value);
  };

  return (
    <div>
      <label htmlFor="whatIs">What is 2+2?</label>
      <select id="whatIs" value={whatIs} onChange={handleWhatIsChange}>
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
    </div>
  );
};

export default W12MInputWhatIs;
