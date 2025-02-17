import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const Navigate = useNavigate()
  const { id } = useParams();
  const data = useLoaderData();
  const handledelete = (id)=>{
    console.log("delete",id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-nest-website-server.vercel.app/movie/${id}`,{
          method:"DELETE"
        })
        .then(res=> res.json())
        .then(data => {console.log(data)
          if(data.deletedCount >0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
          
        })
        Navigate('/') 
      }
    });
  }

  return (
    <div className="max-h-[1000px] bg-gradient-to-br from-blue-900 via-gray-800 to-black flex items-center justify-center p-6">
      <div className="bg-gray-900 h-[800px] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="flex flex-col lg:flex-row">
        
          <div className="lg:w-1/2">
            <img
              src={data.imagelink}
              alt={data.movietitle}
              className="w-[400px] h-50 lg:h-[600px] object-cover m-5 rounded-md"
            />
          </div>
          
          <div className="p-8 lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {data.movietitle}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
                {data.genre}
              </span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                {data.duration} mins
              </span>
              <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">
                Rating: {data.rating}
              </span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                {data.releaseYear}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {data.summary}
            </p>
            <div className="flex gap-4">
              <button onClick={()=>handledelete(id)} className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Delete
              </button>
              <button className="bg-transparent border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Add to Favorites
              </button>
             <Link to={`/updatemovie/${id}`}>
             <button className="bg-transparent border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Update Movie
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
