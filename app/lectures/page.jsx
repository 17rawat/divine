import YogaCard from "@/components/YogaCard";

import { spiritualPractices } from "@/lib/data";

export const metadata = {
  title: "Shrimad Bhagavad Gita - Explore Spritual Practices",
  description:
    "Explore the spiritual practices and teachings from the Shrimad Bhagavad Gita.",
};

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
