import React, { useEffect, useState } from "react";

const Movies = () => {
                    const [movie,setmovie]= useState([])
                    useEffect(()=>{
                                        fetch('https://movie-nest-website-server.vercel.app')
                                        .then(res=>res.json())
                                        .then(data => setmovie(data))
                    },[])
  return <div>
                    <h1>Featured movie:{movie.length}</h1>
  </div>;
};

export default Movies;
