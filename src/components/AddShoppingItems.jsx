import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function AddShoppingItems() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col space-y-6">
      <p>List the item you want to buy</p>
      <div className="space-x-4">
        <label>Name</label>
        <input type="text" className="py-1 rounded-md outline-none px-4" />
      </div>
      <div className="space-x-4">
        <label>Cost</label>
        <input type="text" className="py-1 rounded-md outline-none px-4" />
      </div>
      <div className="space-x-4">
        <label>Description</label>
        <input type="text" className="py-1 rounded-md outline-none px-4" />
      </div>
      <div className="space-x-4">
        <label>Date to buy</label>
        <DatePicker
          className="py-1 rounded-md"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
}

export default AddShoppingItems;
