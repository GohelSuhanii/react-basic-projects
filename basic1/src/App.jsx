import "./App.css";

function App() {
  const list = [
    "Apple",
    "Banana",
    "Cherry",
    "Grape",
    "Lemon",
    "Orange",
    "Peach",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];
  return (
    <>
      <h1>Fruit List</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
