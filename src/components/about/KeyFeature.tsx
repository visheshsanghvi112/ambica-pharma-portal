
import React from "react";

interface KeyFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

const KeyFeature = ({ icon, title, description, colorClass }: KeyFeatureProps) => {
  return (
    <div className="flex items-start">
      <div className={`p-3 ${colorClass}/10 rounded-lg mr-4 shadow-sm`}>
        {icon}
      </div>
      <div>
        <h3 className={`font-semibold ${colorClass} text-lg`}>{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

export default KeyFeature;
