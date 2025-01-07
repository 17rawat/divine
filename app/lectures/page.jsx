import YogaCard from "@/components/YogaCard";

import { spiritualPractices } from "@/lib/data";

const Lectures = () => {
  return (
    <div>
      {spiritualPractices.map((practice) => (
        <span key={practice.title}>
          <YogaCard practice={practice} />
        </span>
      ))}
    </div>
  );
};

export default Lectures;
