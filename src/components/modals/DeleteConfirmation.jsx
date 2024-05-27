import React from "react";
import { toast } from "react-toastify";

function DeleteConfirmation({ setModal, item }) {
  const handleDelete = async (item) => {
    try {
      const deletedItem = await fetch(`http://localhost:3000/items/${item?.id}`, {
        method: "DELETE",
      });
      await deletedItem.json();
      toast.success(`${item?.title} is deleted successfully`)
    } catch (error) {
        console.log(error);
        toast.error("There Have Some Error!")
    }
    setModal(null);
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_delete_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Confirmation</h3>
          <p className="py-4">
            Are You Really Want To Remove{" "}
            <span className="font-bold">{item?.title} </span>From Your Store?
          </p>
          <div className="modal-action">
            <label
              onClick={() => setModal(null)}
              htmlFor="my_delete_modal"
              className="btn"
            >
              No
            </label>
            <label
              onClick={() => handleDelete(item)}
              htmlFor="my_delete_modal"
              className="btn"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
