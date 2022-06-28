import React from "react";

function ListShoppingItems() {
  return (
    <div>
      <div className="text-lg font-semibold">Item Lists</div>
      <div className="flex flex-col space-y-4 py-6 w-1/2">
        <div className="bg-[#DA4D4E] text-white p-2 rounded-md px-4">
          Iphone X
        </div>
        <div className="bg-[#DA4D4E] text-white p-2 rounded-md px-4">
          Iphon 13 Pro Max
        </div>
      </div>
    </div>
  );
}

export default ListShoppingItems;
