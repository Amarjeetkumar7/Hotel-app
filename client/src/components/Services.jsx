import React from "react";
import { FaBed, FaConciergeBell, FaShuttleVan, FaWifi } from "react-icons/fa";

const services = [
  {
    title: "Comfortable Rooms",
    description:
      "Our rooms are designed for your comfort with premium bedding and cozy interiors.",
    icon: <FaBed size={32} />,
  },
  {
    title: "Room Service",
    description: "24/7 room service with delicious meals and quick assistance.",
    icon: <FaConciergeBell size={32} />,
  },
  {
    title: "Free Shuttle",
    description:
      "Complimentary shuttle service for local travel and airport pickup.",
    icon: <FaShuttleVan size={32} />,
  },
  {
    title: "High-Speed Wi-Fi",
    description:
      "Stay connected with fast and secure internet in every corner of the hotel.",
    icon: <FaWifi size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-600">
          Enjoy top-class facilities during your stay
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="text-yellow-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
