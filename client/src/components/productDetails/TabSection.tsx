import React, { useState } from "react";

interface TabSectionProps {
  labels: string[];
  children: React.ReactNode;
}

export function TabSection({ labels, children }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Ensure children is always an array
  const childrenArray = React.Children.toArray(children);

  // Defensive check — no children, render nothing
  if (!childrenArray.length) {
    return null;
  }

  return (
    <div>
      {/* Tab Headers */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
        {labels.map((label, idx) => (
          <button
            key={label} // stable string key
            onClick={() => setActiveTab(idx)}
            style={{
              padding: "0.5rem 1rem",
              background: activeTab === idx ? "#ddd" : "#f5f5f5",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div>{childrenArray[activeTab]}</div>
    </div>
  );
}
