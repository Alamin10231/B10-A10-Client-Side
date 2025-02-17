import { useState } from 'react'

import './App.css'

function App() {


  const [favorites, setFavorites] = useState([]);

  // সিনেমা favorites এ যোগ করা
  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  // favorites থেকে সিনেমা সরিয়ে ফেলা
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  return (
    <>
     
     <div>
      {/* Outlet এর মাধ্যমে children components এ favorites ও ফাংশনগুলো পাঠানো হবে */}
      <Outlet context={{ favorites, addToFavorites, removeFromFavorites }} />
    </div>
      
     
    </>
  )
}

export default App
