import React, { useState } from "react";

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="w-[50%] border border-black">
      <div
        className="p-2 bg-blue-200 flex justify-between cursor-pointer"
        onClick={setIsOpen}
      >
        <span className="font-bold">{title}</span>
        <span>{isOpen ? "⬆️" : "⬇️"}</span>
      </div>
      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
};

export default AccordionItem;
