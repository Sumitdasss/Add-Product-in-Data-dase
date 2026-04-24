

import { useEffect, useState } from 'react';
import axios from 'axios';

export const AllProducts = () => {



const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Apni ki sotti eita delete korte chan?");
    
    if (confirmDelete) {
        try {
      
            await axios.delete(`http://localhost:3000/delete/${id}`);
            
          
            setProducts(products.filter(item => item._id !== id));
            
            alert("Product Muche fela hoyeche!");
        } catch (err) {
            console.error("Delete hoyni:", err);
        }
    }
};











  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/read')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 


        {products.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            
        
            <img src={item.Images} className="w-full h-48 object-cover" alt={item.Productname} />

            <div className="p-4">
        
              <h2 className="text-xl font-bold">{item.Productname}</h2>

         
              <p className="text-gray-600 text-sm mt-1">
                {item.Details}
              </p>

              <div className="flex justify-between items-center mt-4">
          
                <span className="text-blue-600 font-bold text-lg">
                  ${item.price}
                </span>

                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">
                    View
                  </button>
                  <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600">
                    Delete
                  </button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}


      
      </div>
    </div>
  );
};