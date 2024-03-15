import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const SurplusFood = () => {
  const [surplusData, setSurplusData] = useState([]);

  useEffect(() => {
    const fetchSurplusData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/surplus/getAll');

       
        console.log(response.data.surplusFoods)

        setSurplusData(response.data.surplusFoods);

        console.log(response)
      } catch (error) {
        console.error('Error fetching surplus data:', error);
      }
    };

    fetchSurplusData();
  }, []);

  return (
    <>
      <div className="min-h-screen pt-16">
        <div className="container mx-auto">
          <h1 className="text-3xl text-green-700 font-bold mb-8">Surplus Food Listings</h1>
          {surplusData.length > 0 && ( // Check if surplusData is not empty
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {surplusData.map((item) => (
                <div key={item.orgName} className="bg-white rounded shadow p-4">
                  <img src={item.imgFood} alt={item.orgName} className="rounded-lg mb-2" style={{ maxHeight: '200px' }} />
                  <h2 className="text-lg font-semibold mb-2">{item.orgName}</h2>
                  <p>{item.description}</p>
                  <p className="mt-2 text-sm text-gray-500">Available Thalis: {item.foodQuantityAsPerson}</p>
                  <p className="text-sm text-gray-500">Pickup Address: {item.addressPickup}</p>
                  <p className="text-sm text-gray-500">Cooking Time: {new Date(item.cookingTime).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>


        <div className='fixed right-12 bottom-12'>
            <button className='text-white rounded-full bg-green-600 px-6 py-6  text-xl font-bold'>Add </button>
        </div>
      </div>
    </>
  );
};
