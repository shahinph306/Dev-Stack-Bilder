import { use } from 'react';
import type {IDetails} from "../../Types/DetailsType"

interface DetailsProps{
   detailsPromise: Promise<IDetails[]>;
   
}

const Dtails = ({detailsPromise}: DetailsProps) => {
    console.log(detailsPromise);
    const details = use(detailsPromise);
    console.log(details, "details");


    
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl '>Explore the <span className="bg-linear-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Technologies</span></h1>
            <p>Pick one technology per Category to build your ideal stack</p>
            <div className='cards grid grid-cols-3 gap-5'>
                {details.map((detail) =>

                    <div className="card border border-gray-300 rounded-xl p-4 bg-green-100 " key={detail.id}>

                        <div className="iconImage-Badge flex justify-between">
                            <img className='w-10 h-10 object-contain' src={detail.icon} alt={detail.icon} />
                            <span
                              className={` font-bold  
                        ${
                         detail.badge === "Popular"
                            ? "bg-blue-200 text-blue-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Versatile"
                            ? "bg-green-200 text-green-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Fast"
                            ? "bg-orange-200 text-orange-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Standard"
                            ? "bg-blue-200 text-blue-500 px-2 py-2 rounded-lg "
                             : detail.badge === "Standard"
                            ? "bg-blue-200 text-blue-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Top SQL"
                            ? "bg-purple-200 text-purple-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Cache"
                            ? "bg-red-200 text-red-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Ubiquitous"
                            ? "bg-amber-200 text-amber-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Essential"
                            ? "bg-amber-200 text-amber-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Robust"
                             ? "bg-green-200 text-green-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Modern"
                            ? "bg-blue-200 text-blue-500 px-2 py-2 rounded-lg "
                            : detail.badge === "Containers"
                            ? "bg-blue-200 text-blue-500 px-2 py-2 rounded-lg " 
                            : "bg-gray-200 text-gray-500"
                     }`}
>
                     {detail.badge}
                  </span>
                        </div>
                        

                        <h2 className='font-bold'> {detail.name} </h2>
                        <p className='text-gray-500'> {detail.description} </p>
                    <div className="category_Difficulty_Rating flex justify-between font-bold mt-2 text-gray-500">
                        <p>{detail.category} </p>

                        <p>{detail.difficulty} </p>

                        <p>⭐ {detail.rating} </p>
                    </div>
                        

                <button className='bg-black text-white w-full flex justify-center items-center p-2 rounded-xl my-4 cursor-pointer'>Add to Stack</button>


                    </div>
                )}
            </div>
            
        </div>
    );
};

export default Dtails;


