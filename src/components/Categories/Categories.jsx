import { categories } from "../../data";

const Categories = () => {
   console.log(categories);
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <h1 className="text-4xl text-center p-6 text-orange-600">Top Rated Menu Items</h1>
          
          {/* map by top item */}
          
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-2 gap-3 w-full">
          {
                categories.map((item)=>(
                    
                <div className="bg-gray-200 flex justify-center pt-5  text-gray-800 rounded-lg font-medium" key={item.id}> 
                       
                       <h2 className="text-2xl">{item.name}</h2>
              <img src={item.image} alt="" />
                </div>
              
                ))
            }
          </div>

        </div>
    );
};

export default Categories;