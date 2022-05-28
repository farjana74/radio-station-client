import React from 'react';
import { useForm } from 'react-hook-form';
import "./ShowCreate.css";
import axios from 'axios';

const ShowCreate = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res)
                if (res.data) {
                    alert('added sussecfully')
                    reset();
                }
            })
    }







    return (
        <div className='container my-5' >
            <div className=' border col shadow-lg p-4'>

                <div className='contact-us-form'>
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)} >
                        <div className="col-md-6 col">
                            <div className="form-floating ">
                                <input type="text" className="form-control" id="showName" placeholder="showName" required
                                    {...register("name")}
                                />
                                <label htmlFor="showName">Shows Title</label>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-floating ">
                                <input type="text" className="form-control" id="rj_name" placeholder="rj_name" required
                                    {...register("rj_name")}
                                />
                                <label htmlFor="rj_name">Rj Name</label>
                            </div>
                        </div>
                        {/* <div className="col-md-6">

                            <div className="form-floating ">
                                <input {...register("img")} placeholder=" Event Image" required />
                                <label htmlFor="img">Event Image</label>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="time" placeholder="time" required
                                    {...register("time")}
                                />
                                <label htmlFor="time">Event Time</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="img" placeholder="Event Image" required
                                    {...register("img")}
                                />
                                <label htmlFor="img">Event image Url</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="duration" placeholder="duration" required
                                    {...register("duration")}
                                />
                                <label htmlFor="duration">Event Duration</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input type="number" className="form-control" id="views" placeholder="views" required
                                    {...register("views")}
                                />
                                <label htmlFor="views">Total Views</label>
                            </div>
                        </div>
                        {/* <div className="col-md-12">
                            <div className="form-floating ">
                                <input type="number" className="form-control" id="views" placeholder="views" required
                                    {...register("views")}
                                />
                                <label htmlFor="views">Total Views</label>
                            </div>
                        </div> */}
                        {/* <div className="col-md-12 border">
                            <div className="form-floating ">
                                <textarea type="text" className="form-control border-0" id="message" placeholder="message" required
                                    {...register("message")}
                                    style={{ height: "120px" }}
                                />
                                <label htmlFor="message">Event Description</label>
                            </div>
                        </div> */}


                        <div className="col-12 text-center ">
                            <button type="submit" className=" w-50  send-btn"

                            >Send</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ShowCreate;