import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadUser = useLoaderData();
  const [users, setUsers] = useState(loadUser);

  const handleUserDelete = (id) => {
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        fetch(`https://coffee-store-server-topaz-six.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingUser = users.filter((user) => user._id !== id);
              setUsers(remainingUser);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl">User: {users.length}</h2>

      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Create At</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdTime}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <button className="btn join-item bg-[#3C393B] text-white">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>

                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="btn join-item bg-[#EA4744] text-white"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
