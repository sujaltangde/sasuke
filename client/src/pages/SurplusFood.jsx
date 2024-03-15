import React, { useState, useEffect } from "react";
import axios from "axios";

export const SurplusFood = () => {
  const [surplusData, setSurplusData] = useState([]);
  const [user, setUser] = useState({});

  const [surplusFood, setSurplusFood] = useState();

  const [modal, setModal] = useState(false);

  const handleSurplusAdd = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/surplus/create",
        surplusFood
      );
    } catch (err) {
      console.error("Error fetching surplus data:", err);
    }
  };

  const getLogUser = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      const response = await axios.get(
        "http://localhost:5000/api/getLogUser",
        config
      );

      console.log("user", response.data);

      setUser(response.data.user);

      console.log(response.data.user);
    } catch (error) {
      console.error("Error fetching surplus data:", error);
    }
  };

  useEffect(() => {
    const fetchSurplusData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/surplus/getAll"
        );

        // console.log(response.data.surplusFoods)

        setSurplusData(response.data.surplusFoods);

        // console.log(response)
      } catch (error) {
        console.error("Error fetching surplus data:", error);
      }
    };

    fetchSurplusData();

    getLogUser();
  }, []);

  return (
    <>
      <div className="min-h-screen pt-16">
        <div className="container mx-auto">
          <h1 className="text-3xl text-green-700 font-bold mb-8">
            Surplus Food Listings
          </h1>
          {surplusData.length > 0 && ( // Check if surplusData is not empty
            <div className="grid  grid-cols-3 gap-12">
              {surplusData.map((item) => (
                <div
                  key={item.orgName}
                  className="bg-gray-200  flex flex-col items-center justify-center rounded border shadow-md shadow-gray-400 p-4"
                >
                  <img
                    src={item.imgFood}
                    alt={item.orgName}
                    className="rounded-lg mb-2"
                    style={{ maxHeight: "200px" }}
                  />
                  <h2 className="text-xl font-semibold mb-2">{item.orgName}</h2>
                  <p>{item.description}</p>
                  <p className="mt-2 my-1 text-sm text-gray-700">
                    Available Thalis: {item.foodQuantityAsPerson}
                  </p>
                  <p className="text-sm my-1 text-gray-700">
                    Pickup Address: {item.addressPickup}
                  </p>
                  <p className="text-sm my-1 text-gray-700">
                    Cooking Time: {new Date(item.cookingTime).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {modal && (
          <div className="w-[70vw] top-44 left-60  shadow-md shadow-gray-500 h-[50vh] fixed bg-white">
            <form className=" " onSubmit={handleSurplusAdd}>
              {/* orgName
            description
            foodQuantityAsPerson
            cookingTime
            imgFood
        addressPickup */}
              
            <div className="flex items-center justify-center flex-col w-2/3">
            <input className="w-full outline-none border border-gray-500 " type="text" />

<button type="submit" className="bg-green-500 text-white px-6 py-2 font-semibold">Add surplus</button>
            </div>

            </form>
          </div>
        )}

        {user && user.role === "business" && (
          <div className="fixed right-12 bottom-12">
            <button
              onClick={() => setModal(!modal)}
              className="text-white rounded-full bg-green-600 w-16 shadow-md shadow-gray-500 h-16  text-lg font-bold"
            >
              Add{" "}
            </button>
          </div>
        )}

        {/* hey */}
      </div>
    </>
  );
};
