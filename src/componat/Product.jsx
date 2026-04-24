import axios from "axios";

export const Product = () => {
const handleSubmit = async (e) => {
    e.preventDefault(); // Page reload bondho korbe
    
    // FormData object diye data neya
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post('https://your-backend.vercel.app/creat', data);
      alert("Product Added!");
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white w-full max-w-lg p-8 mx-auto rounded-3xl shadow-2xl border border-gray-200">


    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
      Add New Product
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
<a href="/read">read</a>

      <div>
        <label className="text-sm font-semibold text-gray-600">Product Name</label>
        <input type="text" placeholder="Enter product name" name="name"
          className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"/>
      </div>

  
      <div>
        <label className="text-sm font-semibold text-gray-600">Price</label>
        <input type="number" placeholder="Enter price" name="price"
          className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"/>
      </div>


     


      <div>
        <label class="text-sm font-semibold text-gray-600">Description</label>
        <textarea rows="4" placeholder="Write product details..." name="details"
          class="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"></textarea>
      </div>


      <div>
        <label class="text-sm font-semibold text-gray-600">Image URL</label>
        <input type="text" placeholder="Paste image link" name="images"
          class="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"/>
      </div>


      <button type="submit"
        class="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition">
        ➕ Add Product
      </button>

    </form>

  </div>
  )
}
