import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

function EditItem() {
  const data = useLoaderData();
  const [itemData, setItemData] = useState({});
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
    try {
      const title = event.target.title.value;
      const description = event.target.description.value;
      const price = event.target.price.value;
      const image = event.target.image.value;
      const data = await fetch("http://localhost:3000/items/" + itemData?.id, {
        method: "PATCH",
        body: JSON.stringify({ title, description, price, image }),
      });
      const result = await data.json();
      console.log(result);
      toast.success("updated successfully")
    } catch (error) {
      console.log(error)
      toast.error("There Have Some Error!")
    }
  };
  useEffect(() => {
    setItemData(data);
  }, [data]);
  return (
    <div>
      <h2 className="text-xl text-center underline">Edit Item</h2>
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
            defaultValue={itemData?.title}
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
            defaultValue={itemData?.description}
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
            defaultValue={itemData?.price}
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
            defaultValue={itemData?.image}
            required
          />
        </label>
        <input
          type="submit"
          className="btn btn-info my-2"
          value="Update Item"
        />
      </form>
    </div>
  );
}

export default EditItem;
