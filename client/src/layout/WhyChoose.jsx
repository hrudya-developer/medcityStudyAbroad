import {
  Backpack,
  BadgeDollarSign,
  FileCheck,
  ShieldCheck,
  UserRoundCheck
} from "lucide-react";

const WhyChoose = () => {
  const features = [
    { icon: UserRoundCheck, text: "Expert Guidance" },
    { icon: FileCheck, text: "Visa Assistance" },
    { icon: BadgeDollarSign, text: "Scholarship Support" },
    { icon: Backpack, text: "End-to-End Support" },
    { icon: ShieldCheck, text: "Trusted by 50K+ Students" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 mb-10">
      
      <h1 className="text-3xl font-bold text-start mb-6 md:mb-10">
        WHY <span className="text-primary">CHOOSE</span> US?
      </h1>

      {/* GRID instead of flex for better responsiveness */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-10">
        
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 shadow-sm rounded-md p-4 flex flex-col justify-center items-center gap-3 text-center"
            >
              <Icon className="text-primary size-8" />
              <p className="text-secondary text-sm">{item.text}</p>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default WhyChoose;