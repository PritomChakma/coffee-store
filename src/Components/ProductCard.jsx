import Swal from "sweetalert2";

const ProductCard = ({ coffees }) => {
  const { _id, name, quantity, category, Price, photo } = coffees;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`http://localhost:5000/coffees/${_id}`, {
        //   mrthod: "DELETE",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     if (data.deletedCount > 0) {
        //       Swal.fire({
        //         title: "Deleted!",
        //         text: "Your Coffee has been deleted.",
        //         icon: "success",
        //       });
        //     }
        //   });
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
    });
  };
  return (
    <div className="card mt-5  bg-[#F5F4F1] grid grid-cols-3 items-center ">
      <div>
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
      </div>
      {/* title */}
      <div className="text-start">
        <p>
          <span className="font-semibold mr-2">Name:</span>
          {name}
        </p>
        <p>
          <span className="font-semibold mr-2">Category:</span>
          {category}
        </p>
        <p>
          <span className="font-semibold mr-2">Price:</span> {Price} Tk
        </p>
      </div>

      <div className="join join-vertical p-7">
        <button className="btn join-item bg-[#D2B48C] text-white">
          <i class="fa-regular fa-eye"></i>
        </button>
        <button className="btn join-item bg-[#3C393B] text-white">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn join-item bg-[#EA4744] text-white"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
