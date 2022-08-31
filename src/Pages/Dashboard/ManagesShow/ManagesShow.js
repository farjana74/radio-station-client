import './ManagesShow.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { Table } from 'react-bootstrap';
import { MdUpdate } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

const ManagesShow = () => {
    const [show, setShow] = useState([])

    // SWR ADDED--------------------
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://young-gorge-80259.herokuapp.com/order', fetcher)



    // get api intrigate------------------
    useEffect(() => {
        fetch('https://young-gorge-80259.herokuapp.com/order')
            .then((res) => res.json())
            .then((data) => setShow(data));
    }, []);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // deleteted event------------------

    const handleDeleteOrder = id => {
        const url = `https://young-gorge-80259.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted successfully')
                    const remainingUsers = show.filter(service => service._id !== id)
                    setShow(remainingUsers)



                }
            })

    }
    return (
        <div className='container pt-5 '>
            <Table className="table table-bordered bg-light rounded shadow-sm  table-hover table-responsive">

                <thead className='table-header'>
                    <tr className='text-center'>
                        <th className='py-3 ' scope="col"> Customer Name</th>
                        <th className='py-3 text-center' scope="col">email</th>
                        <th className='py-3 text-center' scope="col">Customer Adreess</th>
                        <th className='py-3 text-center' scope="col">Product Price</th>
                        <th className='py-3 text-center' scope="col">Phone</th>

                        <th className='py-3' scope="col">Action</th>

                    </tr>
                </thead>

                {show?.map((more) => (
                    <tbody>
                        <tr>

                            <td className='text-center'>{more?.name}</td>
                            <td className='text-center'>{more?.email}</td>
                            <td className='text-center'>{more?.address}</td>
                            <td className='text-center'>{more?.price} min</td>
                            <td className='text-center'>{more?.phone}</td>
                            <td className=''>
                                <TiDelete onClick={() => handleDeleteOrder(more._id)} className=' fs-3 me-3 text-danger' role={"button"}
                                ></TiDelete>



                                <Link to={`/dashboard/showUpdate/${more._id}`}> <MdUpdate className='fs-4'></MdUpdate>
                                </Link>


                            </td>

                        </tr>
                    </tbody>
                ))}


            </Table>

        </div>
    );
};

export default ManagesShow;