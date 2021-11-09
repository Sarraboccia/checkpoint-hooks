import "./moviecard.css"


function Moviecard ({movie}) {
  return (
    <div className="movie">
   
   <img className="photo-css" width="250" src={movie.photo} alt=""/>
        <h1> {movie.title} </h1>
        
         <h2>Rate : {movie.rate}</h2>
        
    </div>
    
  );
}

export default Moviecard;