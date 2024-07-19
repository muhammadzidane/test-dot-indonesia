import React from "react";

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <div className="[&:not(:last-child)]:mt-8">
      <h1 className="text-2xl font-bold mb-8">{title}</h1>
      {children}
    </div>
  );
};

export default Section;
