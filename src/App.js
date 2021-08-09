import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";

const allcategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [category, setCategory] = useState(allcategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItem = data.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main className="container">
      <header className="header">
        <h2>our menu</h2>
        <div></div>
      </header>
      <Categories category={category} filterItems={filterItems} />
      <section className="section-center">
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
