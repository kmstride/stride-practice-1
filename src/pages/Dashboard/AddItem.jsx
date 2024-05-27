import React, { useState } from "react";

function AddItem() {
  const [item, setItem] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });
  const handleChange = (event) => {
    setItem((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetch("http://localhost:3000/items",{
      method: "POST",
      body: JSON.stringify(item)
    });
    const result = await data.json();
    console.log(result)
  };
  return (
    <div>
      <h2 className="text-xl text-center underline">Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type Item Title"
            className="input input-bordered w-full max-w-xs"
            name="title"
            onChange={handleChange}
            value={item.title}
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            type="text"
            placeholder="Type Item Description"
            className="input input-bordered w-full max-w-xs"
            name="description"
            onChange={handleChange}
            value={item.description}
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Price</span>
          </div>
          <input
            type="number"
            placeholder="Type Item Price"
            className="input input-bordered w-full max-w-xs"
            name="price"
            onChange={handleChange}
            value={item.price}
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image</span>
          </div>
          <input
            type="text"
            placeholder="Type Item Image Link"
            className="input input-bordered w-full max-w-xs"
            name="image"
            onChange={handleChange}
            value={item.image}
            required
          />
        </label>
        <input type="submit" className="btn btn-info my-2" value="Add Item" />
      </form>
    </div>
  );
}

export default AddItem;
