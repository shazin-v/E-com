import { Check } from "lucide-react";

const ProgressSteps = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { number: 1, title: "Address", completed: true },
    { number: 2, title: "Payment Method", completed: false, active: true },
    { number: 3, title: "Review", completed: false },
  ];

  return (
    <div className="flex items-center justify-center space-x-8 mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.completed
                  ? "bg-black text-white"
                  : step.active
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.completed ? <Check className="h-4 w-4" /> : step.number}
            </div>
            <span
              className={`ml-2 text-sm ${
                step.active ? "font-medium" : "text-gray-600"
              }`}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-16 h-px bg-gray-300 ml-4" />
          )}
        </div>
      ))}
    </div>
  );
};
