import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DeleteConfirmation from "../../components/modals/DeleteConfirmation";

function MyItems() {
  const items = useLoaderData();
  const [modal, setModal] = useState(null);
  return (
    <div>
      <h3 className="text-center font-bold underline">Items List</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.reverse().map((item, index) => (
              <tr key={item?.id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-8 rounded-xl">
                      <img src={item?.image} alt={item?.title} />
                    </div>
                  </div>
                </th>
                <td>{item?.title}</td>
                <td>{item?.price}</td>
                <td>
                  <Link
                    to={`/dashboard/edit-item/${item?.id}`}
                    className="btn btn-xs bg-sky-400"
                  >
                    Edit
                  </Link>{" "}
                  <label
                    onClick={() => setModal(item)}
                    htmlFor="my_delete_modal"
                    className="btn btn-xs bg-red-500"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modal && <DeleteConfirmation item={modal} setModal={setModal} />}
    </div>
  );
}

export default MyItems;
