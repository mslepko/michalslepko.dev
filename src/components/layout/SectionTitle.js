import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title">{title}</h2>
    </>
  );
}
