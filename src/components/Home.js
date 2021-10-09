import React, { useContext, useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { MainContext } from '../context/MainContext';

export default function Home() {

    const [show,setShow] = useState([])
    const {loading,setLoading} = useContext(MainContext)

    useEffect(() =>{
        setLoading(0)
    },[])

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.tvmaze.com/shows')
            .then(res => res.json())
            .then((data) => {
                setShow(data)
            })
        }, 200);
    },[])

    return (
        <div className="container">
            <div className="home-show-box">
            {show.map(item => (
                <Link to={`/show/${item.id}`}>
                    <div className="home-show">
                    <div className="show-overlay">
                        <div className="show-description">
                            {item.summary.replace(/(<([^>]+)>)/gi, "")}
                        </div>
                        <span className="show-more">
                            Show More
                        </span>
                        <div className="show-genres">
                            <span>{item.genres[0]}</span>
                            <span>{item.genres[1]}</span>
                            <span>{item.genres[2]}</span>
                        </div>
                    </div>
                    <div className="show-body">
                        <img src={item.image.medium}/>
                    </div>
                    <div className="show-title-rating">
                        <div className="show-title">
                            <span>
                                {item.name}
                            </span> 
                        </div>
                        <div className="show-rating">
                            <AiFillStar/> 
                            <span>
                            {item.rating.average}
                            </span>
                        </div>
                    </div>
                    <div className="show-language">
                        <span>
                            {item.language}
                        </span>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}
