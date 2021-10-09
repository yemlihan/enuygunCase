import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/MainContext'

export default function Detail({match}) {
    const [show,setShow] = useState([])

    const {loading,setLoading} = useContext(MainContext)

    useEffect(() => {
        getShow()
    },[])

    const showId = match.params.id
    const api = `https://api.tvmaze.com/shows/${showId}`
    
        function getShow(){
            fetch(api)
        .then(res => res.json())
        .then(data => {
            setShow(data)
        setLoading(1)
        })  
        } 
   
    return (
        <div>
            {loading > 0 &&
        <div className="container detail-show">

                <div className="detail-show-image">
                    <img width="250" height="400" src={show.image.medium} alt="" />
                </div>
                <div className="detail-show-box">
                <div className="show-title">{show.name}</div>
                <div className="show-genres">
                    Tür : 
                    <span>{show.genres[0]}</span>,
                    <span>{show.genres[1]}</span>,
                    <span>{show.genres[2]}</span>
                </div>
                <div className="show-imdb">
                    IMDB : <span>{show.rating.average}</span> 
                </div>
                <div className="show-date">
                    Yapım Yılı :
                    <span>{show.premiered.slice(0,4)}</span>
                </div>
                <div className="show-production">
                    Ülke :
                    <span>{show.network.country.name}</span>
                </div>
                <div className="show-runtime">
                    Film Süresi :
                    <span>{show.runtime}</span>
                </div>
                <div className="show-description">
                    <h4>Film Özeti :</h4> 
                    <span>
                    {show.summary.replace(/(<([^>]+)>)/gi, "")}
                    </span>
                </div>
            </div>  
        </div>

            }
            </div>
    )
}
