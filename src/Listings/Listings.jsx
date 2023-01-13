import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import data from "../Data/films.json"
import ListingMovie from "./ListingMovie"
import Film from "./Film"


const Listings = () => {

    // const filmsListing = Array.from(data).map(currentFilm => {
    //     const film = Film(currentFilm.title, currentFilm.synopsis, currentFilm.id);
    //     return(
    //         <ListingMovie listing={film} key={film.id} />
    //     )
    // })

    return(
        <>
        <Header/>

            <h4>Here are the current listings available! Feel free to make a booking too!</h4>
            
            <div className="row">
                {console.log({data})}

                {Array.from(data).map(films => {
                    return(
                    <div className="col-4" key={films.id}> 
                        <ListingMovie title={films.title} synopsis={films.synopsis}/>
                        {/* <p>{filmsListing}</p> */}
                    </div>
                    )
                })}

            </div>

        <Footer/>
        </>
    )
}

export default Listings