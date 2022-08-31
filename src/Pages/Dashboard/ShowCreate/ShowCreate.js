import './ShowCreate.css';

import React from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';

const ShowCreate = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://young-gorge-80259.herokuapp.com/order', data)
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
                                <input type="text" className="form-control" id="customerName" placeholder="customerName" required
                                    {...register("name")}
                                />
                                <label htmlFor="customerName">Customer Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-floating ">
                                <input type="text" className="form-control" id="email" placeholder="email" required
                                    {...register("email")}
                                />
                                <label htmlFor="email">Customer Email</label>
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
                                <input className="form-control" id="address" placeholder="address" required
                                    {...register("address")}
                                />
                                <label htmlFor="address">Customer Adress</label>
                            </div>
                        </div>
                        {/* <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="img" placeholder="Event Image" required
                                    {...register("img")}
                                />
                                <label htmlFor="img">Event image Url</label>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="price" placeholder="price" required
                                    {...register("price")}
                                />
                                <label htmlFor="price">Product Price</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input type="number" className="form-control" id="phone" placeholder="phone" required
                                    {...register("phone")}
                                />
                                <label htmlFor="phone">Phone</label>
                            </div>
                        </div>



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