import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  const { _id, name, quantity, category, Price, photo } = coffees;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const Price = form.Price.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      category,
      Price,
      photo,
    };
    console.log(newCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] md:p-24 ">
      <h2 className="text-3xl font-bold text-center my-5">
      Update Existing Coffee Details
      </h2>
      <p className="text-center md:w-10/12 mx-auto mb-10">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>

      <form onSubmit={handleUpdateCoffee}>
        {/*name and quantity form row */}
        <div className="md:flex gap-8 px-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div class="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">
                Available Quantity
              </span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/*category and details form row */}
        <div className="md:flex gap-8 px-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="category"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div class="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              name="Price"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* photo url form */}
        <div class="form-control md:w-full px-2">
          <label className="label">
            <span className="label-text font-semibold">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo url"
            className="input input-bordered w-full"
            required
          />
        </div>
        <input
          type="submit"
          value="Add coffee "
          className="btn btn-block bg-[#D2B48C] my-7 px-2"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
