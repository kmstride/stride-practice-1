import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";

function Home() {
  const items = useLoaderData();
  return (
    <div>
      <Banner />
      <h1 className="text-xl text-center font-bold underline">Our Store</h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-4">
          {items ? (
            items.reverse().map((item) => (
              <div
                className="card w-96 bg-base-100 shadow-xl image-full"
                key={item?.id}
              >
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item?.title}</h2>
                  <p>{item?.description}</p>
                  <p>${item?.price}</p>
                  <div className="card-actions justify-end">
                    <Link className="btn btn-primary" to={`/items/${item?.id}`}>
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Items Here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
