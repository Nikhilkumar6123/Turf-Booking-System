import React, { useEffect, useState } from "react";
import axios from "axios";

const AddTurf = () => {
  const [form, setForm] = useState({
    turfName: "",
    location: "",
    city: "",
    price: "",
  });

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const backendUrl = "http://localhost:5000"; // change to your backend URL

  // 🔄 Fetch cities from API
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get(`${backendUrl}/admin/getcity`);
        console.log(res.data.response,">>>>");
        setCities(res.data.response || []);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);
console.log(cities,"???????");
  // 🔧 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 🚀 Submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${backendUrl}/admin/addturf`, form);
      console.log("Turf added:", res.data);
      alert("Turf successfully added!");
      setForm({ turfName: "", location: "", city: "", price: "" }); // Reset
    } catch (error) {
      console.error("Error submitting turf:", error);
      alert("Failed to add turf.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-60 rounded-3xl shadow-lg p-10 max-w-3xl w-full backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Add Your Ground</h2>
        <p className="text-center mb-6 text-gray-600">
          Before Someone Else Does
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="turfName"
            value={form.turfName}
            onChange={handleChange}
            placeholder="Turf Name"
            required
            className="input p-3 rounded border"
          />
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            className="input p-3 rounded border"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city._id} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Turf Location"
            required
            className="input p-3 rounded border"
          />

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            placeholder="Price per Slot"
            required
            className="input p-3 rounded border"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-[#171b61] text-white py-2 px-6 rounded-full hover:bg-blue-800 w-full"
        >
          {loading ? "Submitting..." : "Submit Now"}
        </button>
      </form>
    </div>
  );
};

export default AddTurf;
