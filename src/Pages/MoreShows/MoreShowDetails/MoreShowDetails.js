import React, { useEffect, useState } from 'react';
import "./MoreShowDetails.css";

import show1 from "../../../images/01_Event-690x460.jpg"
import show2 from "../../../images/02_Event-690x460.jpg"
import show3 from "../../../images/03_Event-690x460.jpg"
import show4 from "../../../images/05_Event-690x460.jpg"
import show5 from "../../../images/06_Blog-Image-690x460.jpg"
import show6 from "../../../images/06_Blog-Image-690x460.jpg"
import show7 from "../../../images/09_Blog-Image-690x460.jpg"
import show8 from "../../../images/01_Blog-Image-690x460.jpg"
import show9 from "../../../images/03_Blog-Image-570x449.jpg"
import MoreShowsDetailsCard from '../MoreShowsDetailsCard/MoreShowsDetailsCard';

const MoreShowDetails = () => {
    const [moreShow, setMoreShow] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setMoreShow(data))
    }, [])
    return (
        <div className='container-fluid'>
            <div className="container">
                <h1 className='text-center explore-title  pt-5'>We explore our shows</h1>
                {/* <p className='text-center'>bulum nec odio aea the dumm ipsumm ipsum.</p> */}
                <hr className='w-50 mx-auto pb-1 mb-5' />
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-1 gx-2 gy-2 g-lg-4">


                    {
                        moreShow.map(moreShows => <MoreShowsDetailsCard
                            moreShows={moreShows}
                            key={moreShows.id}


                        ></MoreShowsDetailsCard>)
                    }






                </div>
            </div>

        </div>
    );
};

export default MoreShowDetails;