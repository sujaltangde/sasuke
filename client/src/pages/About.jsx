import React from 'react'

export const About = () => {
  return (
    <>
    
    <div className="text-green-700 mx-12 p-4 pt-24">
      <h1 className="text-3xl font-bold mb-4">About RotiRakshak</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          RotiRakshak is dedicated to combating food waste and hunger by connecting surplus food from businesses with those in need. Our platform aims to create a sustainable solution for food redistribution, ensuring that no edible food goes to waste while also supporting communities in need.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">What We Do</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Bridge the Gap: We act as a bridge between food providers, such as restaurants and grocery stores, and charitable organizations or individuals who require food assistance.</li>
          <li>Minimize Food Waste: By redistributing surplus food that would otherwise go to waste, we contribute to minimizing food waste and promoting a more sustainable food system.</li>
          <li>Empower Communities: RotiRakshak empowers communities by providing access to nutritious meals, fostering partnerships between businesses and charities, and raising awareness about food waste issues.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">How It Works</h2>
        <p className="text-gray-700 mb-4">
          <strong>Donations Listing:</strong> Businesses list surplus food items on our platform, specifying details such as quantity, type of food, and pickup availability.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Donation Requests:</strong> Charities, NGOs, and individuals in need can browse available food listings and submit requests for donations that match their requirements.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Efficient Redistribution:</strong> Our platform uses intelligent matching algorithms to efficiently redistribute surplus food to relevant beneficiaries, optimizing logistics for pickup and delivery.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Impact Measurement:</strong> We track and measure the impact of donations, including meals served, food waste reduced, and social welfare contributions, to showcase the positive outcomes of our efforts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
        <p className="text-gray-700">
          At RotiRakshak, we envision a future where food resources are utilized responsibly, hunger is alleviated, and communities thrive with access to wholesome meals. Join us in our mission to make a meaningful difference in food sustainability and social welfare.
        </p>
      </section>
    </div>
    
    </>
  )
}
