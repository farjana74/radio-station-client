import React, {
  useEffect,
  useState,
} from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const ShowUpdate = () => {
    const { register, handleSubmit, reset } = useForm();
    const { showId } = useParams()
    console.log(showId)
    const [updateShow, setUpdateShow] = useState({})

    const handleNameChange = e => {

        const updateName = e.target.value;
        console.log(updateName);
        const UpdateNameChange = {
            name: updateName, email: updateShow.email, address: updateShow.address, price: updateShow.price, phone: updateShow.phone
        };
        setUpdateShow(UpdateNameChange);
        console.log(UpdateNameChange)
    }

    const handleEmail = e => {
        const updateEmail = e.target.value;
        const UpdateEmailUser = {
            email: updateEmail, name: updateShow.name, address: updateShow.address, price: updateShow.price, phone: updateShow.phone
        };
        setUpdateShow(UpdateEmailUser);
    }
    const handleAdressChange = e => {
        const updateAdress = e.target.value;
        const UpdateUserAdress = {
            address: updateAdress, email: updateShow.email, name: updateShow.name, price: updateShow.price, phone: updateShow.phone
        };
        setUpdateShow(UpdateUserAdress);
    }

    const handlePrice = e => {
        const updatePrice = e.target.value;
        const UpdateUserPrice = {
            price: updatePrice, email: updateShow.email, name: updateShow.name, address: updateShow.address, phone: updateShow.phone
        };
        setUpdateShow(UpdateUserPrice);
    }
    const handlePhoneNumber = e => {
        const updatePhone = e.target.value;
        const UpdateUserPhone = {
            phone: updatePhone, price: updateShow.price, email: updateShow.email, name: updateShow.name, address: updateShow.address
        };
        setUpdateShow(UpdateUserPhone);
    }


    useEffect(() => {
        const url = `https://young-gorge-80259.herokuapp.com/order/${showId
            }`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateShow(data))


    }, [])


    const handleUpdateChange = (e) => {
        const url = `https://young-gorge-80259.herokuapp.com/order/${showId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateShow)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('succes')
                    setUpdateShow({});
                }
            })
        e.preventDefault();






    }

    return (
        <div className='container my-5' >


            <div className=' border col shadow-lg p-4'>

                <div className='contact-us-form'>
                    <form className="row g-3" onSubmit={handleUpdateChange}  >
                        <div className="col-md-6 col">
                            <div className="form-floating  ">
                                <input type="text" className="form-control" onChange={handleNameChange} value={updateShow.name || ''} placeholder="customerName"

                                />
                                <label htmlFor="customerName">Customer Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-floating ">
                                <input type="text" className="form-control" onChange={handleEmail} value={updateShow.email || ''} id="email" placeholder="email" required

                                />
                                <label htmlFor="email">Customer Email</label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" onChange={handleAdressChange} value={updateShow.address || ''} id="address" placeholder="address" required

                                />
                                <label htmlFor="address"> Customer Address</label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="price" onChange={handlePrice} value={updateShow.price || ''} placeholder="Price" required

                                />
                                <label htmlFor="price"> Product Price</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input type="number" className="form-control" onChange={handlePhoneNumber} value={updateShow.phone || ''} id="phone" placeholder="phone" required

                                />
                                <label htmlFor="phone">Phone</label>
                            </div>
                        </div>


                        <div className="col-12 text-center ">
                            <button type="submit" className=" w-50  send-btn"

                            >Update</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ShowUpdate;