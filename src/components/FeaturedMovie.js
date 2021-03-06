 import React, { useDebugValue } from 'react';
 import './FeaturedMovie.css';

 export default ({item})=>{
            let firstDate = new Date(item.first_air_date); 
            let genres = [];
            for(let i in item.genres){
                genres.push(item.genres[i].name);
            }
            let description = item.overview;
            if(description.length > 300){
                description = description.substring(0,300)+'...';
            }
            return(
                <section className=" featured" style={{
                        backgroundSize: 'cover',
                        backgroundPosition:'Center',
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

                }}>
                    <div className="featured--Vertical">
                       
                        <div className = "featured--Horizontal">
                                <div className="featured--Name">
                                     {item.original_name}
                                </div>
                                <div className="featured--Info">
                                    <div className="featured--Points">{item.vote_average}pontos</div>
                                    <div className="featured--Year">{firstDate.getFullYear()}</div>
                                    <div className="featured--Season">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's':''}</div>
                                </div>
                                <div className="featured--Description">{description}</div>
                                <div className="featured--Buttons">
                                    <a href={`/watch/${item.id}`} className="featured--WatchButton"> ► Assistir</a>
                                    <a href={`/list/add/${item.id}`} className="featured--MyListButton">+ Minha lista</a>
                                </div>
                                <div className="featured--Genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
                        </div>  
                        
                    </div>
                 </section>    

            );


 }