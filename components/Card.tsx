import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <div className="text-gray-600 space-y-2">
        {children}
      </div>
    </div>
  );
}
