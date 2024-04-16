import { useState } from "react";
import { data } from "../../data";

const Food = () => {
    const [foods , setFoods] = useState(data);


// filter by type
   const filterType=(category)=>{
    setFoods(
        data.filter((food)=>{
            return food.category===category;

        })
    )
   }
// filter by price

const filterPrice =(price)=>{
    setFoods(
        data.filter((food)=>{
            return food.price===price;
        })
    )
}
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <h1 className="text-4xl text-orange-600 font-bold text-center">Top Rated Menu Items</h1>
        <div className="flex flex-col lg:flex-row justify-between" >



            {/* filter type */}
        <div >
            <p className="text-grap-700 font-bold">Filter Type</p>
            <div className="flex justify-between flex-wrap ">
                <button onClick={()=>setFoods(data)} className="m-1        border p-2 rounded-lg hover:text-orange-700  text-orange-400">All</button>
                <button onClick={()=>filterType('burger')}  className="m-1 border p-2 rounded-lg hover:text-orange-700 text-orange-400">Burgers</button>
                <button onClick={()=>filterType('pizza')} className="m-1   border p-2 rounded-lg hover:text-orange-700 text-orange-400">Pizza</button>
                <button onClick={()=>filterType('salad')} className="m-1   border p-2 rounded-lg hover:text-orange-700 text-orange-400">Salads</button>
                <button onClick={()=>filterType('chicken')} className="m-1 border p-2 rounded-lg hover:text-orange-700 text-orange-400 ">Chicken</button>
            </div>
        </div>


        <div>
            <p className="text-grap-700 font-bold">Filter Price</p>
            <div className="flex justify-between max-e-w-[390px] w-full" >
                <button onClick={()=>filterPrice('$')} className="m-1 border rounded-lg text-orange-600 p-2 hover:text-orange-600">$</button>
                <button onClick={()=>filterPrice('$$')} className="m-1 border rounded-lg text-orange-600 p-2 hover:text-orange-600">$$</button>
                <button onClick={()=>filterPrice('$$$')} className="m-1 border rounded-lg text-orange-600 p-2 hover:text-orange-600">$$$</button>
                <button onClick={()=>filterPrice('$$$$')} className="m-1 border rounded-lg text-orange-600 p-2 hover:text-orange-600">$$$$</button>
              
            </div>
        </div>
            </div>
$





  {/* load data */}
  <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
            
        </div>
    );
};

export default Food;