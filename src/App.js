import "./App.css";
import AddShoppingItems from "./components/AddShoppingItems";
import ListShoppingItems from "./components/ListShoppingItems";

function App() {
  return (
    <>
      <div className="bg-[#790403] text-white text-4xl text-center w-full py-4">
        My Shoping List
      </div>
      <div className="px-12  min-h-screen py-16 bg-[#F5F5F5] grid grid-cols-2">
        <AddShoppingItems />
        <ListShoppingItems />
      </div>
    </>
  );
}

export default App;
