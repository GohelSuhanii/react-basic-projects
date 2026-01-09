import { useState } from "react";

import "./App.css";

function App() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quos.",
    },
    {
      title: "How long do I need to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt corporis perspiciatis omnis?",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit labore eveniet, dicta nobis eligendi. Voluptate cupiditate veritatis in quae",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Accordion example using useState</h1>
      {faqs.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggleAccordion(index)}>{item.title}</h3>
          {openIndex === index && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;
