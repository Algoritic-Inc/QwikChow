import { useState } from "react";
import "./App.css";

const initailItem = [
  { name: "Charger", packed: false, id: 1, quantity: 1 },
  { name: "Clothes", packed: false, id: 2, quantity: 10 },
];

function App() {
  const [items, setItems] = useState([]);
  return (
    <>
      <Header />
      <Main items={items} setItems={setItems} />
      <Footer items={items} />
    </>
  );
}

function Header() {
  return (
    <header>
      <h3 className="logo">Fox-Pratice</h3>
      <div className="input-container">
        <span>Search</span>
        <input type="text" />
      </div>
      <ul className="link">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

function Main({ items, setItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  // const [sortBy, setSortBy] = useState("input");
  // const inputList = items
  // if (sortyBy=== 'input')

  return (
    <main>
      <div className="top">
        <h4>Welcome to Fox-Travel list</h4>
        {/* <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="packed">Sort by packed</option>
          <option value="name">Sort by name</option>
        </select> */}
      </div>
      <PackingList
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
        setItems={setItems}
        items={items}
      />
      <Items items={items} setItems={setItems} />
    </main>
  );
}

function PackingList({
  description,
  setDescription,
  quantity,
  setQuantity,
  setItems,
  items,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    setItems((items) => [...items, newItem]);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>what do you need for your trip✈️</span>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Items({ items, setItems }) {
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li id={item.id} key={item.id}>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => handleToggleItem(item.id)}
          />
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <small onClick={() => handleDeleteItem(item.id)} className="cancel">
            ❌
          </small>
        </li>
      ))}
    </ul>
  );
}

function Footer({ items }) {
  if (!items.length)
    return (
      <footer>
        <em>Start adding list for your travel🚀</em>
      </footer>
    );
  const itemsNum = items.length;
  const packedNum = items.filter((item) => item.packed === true).length;
  const percent = Math.round((packedNum / itemsNum) * 100);

  if (percent === 100)
    return (
      <footer>
        <em>Your items are packed✈️</em>
      </footer>
    );
  if (percent === 0)
    return (
      <footer>
        <em>
          You have {itemsNum} items. Please make some packing list for your
          travel.
        </em>
      </footer>
    );

  return (
    <footer>
      <em>
        You have {itemsNum} items , and you already packed {packedNum} (
        {percent}%)
      </em>
    </footer>
  );
}

export default App;
