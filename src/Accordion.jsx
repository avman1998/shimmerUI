const data = [
  {
    id: 1,
    title: "Accordion Item 1",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 2,
    title: "Accordion Item 2",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 3,
    title: "Accordion Item 3",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];
import AccordionItem from "./AccordionItem";
import { useState } from "react";
const Accordion = () => {
  const [activeId, setActiveId] = useState(null);
  return (
    <div className="p-2 m-auto">
      {data.map((item) => {
        return (
          <AccordionItem
            key={item.id}
            title={item.title}
            body={item.body}
            isOpen={item.id === activeId}
            setIsOpen={() => {
              if (item.id === activeId) setActiveId(null);
              else setActiveId(item.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
