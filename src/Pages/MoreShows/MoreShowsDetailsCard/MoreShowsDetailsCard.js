import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import "./MoreShowsDetailsCard.css";

const MoreShowsDetailsCard = ({ moreShows }) => {
    const { img, name, time, duration, views, rj_name } = moreShows

    return (
        <div class=" col ">
            <img src={img} class="card-img-top " alt="..." />
            <div class="card-body border shadow-lg">
                <h3 class="card-text text-center fs-4 moreShowCard-title">{name}</h3>
                <p className='text-center fs-6'>{rj_name}</p>
                <p className='text-center fs-6'>{time}</p>
                <div className=' moreShowCard-title d-flex align-items-center justify-content-center '>
                    <div >
                        <h6 className='views-time'><BiTimeFive />{duration}min</h6>
                    </div>
                    <div>
                        <h6 className='ps-3 views-time'>{views}Views</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreShowsDetailsCard;