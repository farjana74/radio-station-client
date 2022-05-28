import React from 'react';
import blog1 from "../../images/01_Blog-Image-570x449 (2).jpg";
import blog2 from "../../images/02_Blog-Image-570x449.jpg";
import blog3 from "../../images/03_Blog-Image-570x449.jpg";
import "./LatestBlog.css"


const LatestBlog = () => {
    return (
        <div className='container-fluid my-5'>
            <div className='container'>
                <h1 className='text-center radio-jockey-title mb-5'>Latest Blog
                </h1>
                <div className=" row row-cols-1 row-cols-lg-3 g-2  g-lg-3 gx-5">
                    <div class="col rounded">
                        <img src={blog1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 class="card-text fs-4">Our system comprehen is applied creativity.</h2>
                            <p className='pt-2'>7 Apr 2021 Post By <span className='post-admin'>admin</span></p>
                        </div>
                    </div>
                    <div class="col rounded">
                        <img src={blog2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 class="card-text fs-4">Our system comprehen is applied creativity.</h2>
                            <p className='pt-2'>7 Apr 2021 Post By <span className='post-admin'>admin</span></p>
                        </div>
                    </div>
                    <div class="col rounded">
                        <img src={blog3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 class="card-text fs-4">Our system comprehen is applied creativity.</h2>
                            <p className='pt-2'>7 Apr 2021 Post By <span className='post-admin'>admin</span></p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default LatestBlog;