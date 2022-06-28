import "./App.css";
import AddShoppingItems from "./components/AddShoppingItems";
import ListShoppingItems from "./components/ListShoppingItems";

function App() {
  return (
    <div className="px-12  min-h-screen py-16 bg-[#F5F5F5] grid grid-cols-2">
      {/* <h1>Shopping List</h1> */}
      <AddShoppingItems />
      <ListShoppingItems />
    </div>
  );
}

export default App;
