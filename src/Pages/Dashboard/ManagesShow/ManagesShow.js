import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MdUpdate } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import "./ManagesShow.css";
const ManagesShow = () => {
    const [show, setShow] = useState([])

    // get api intrigate------------------
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => setShow(data));
    }, []);

    // deleteted event------------------

    const handleDeleteOrder = id => {
        const url = `http://localhost:5000/services/${id}`;
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
                        {/* <th className='py-3' scope="col" width="50">ID</th> */}
                        <th className='py-3 ' scope="col"> Event Name</th>
                        <th className='py-3 text-center' scope="col">Rj Name</th>
                        <th className='py-3 text-center' scope="col">Event Time</th>
                        {/* <th className='py-3 text-center' scope="col">Event Image</th> */}
                        <th className='py-3 text-center' scope="col">Event Duration</th>
                        <th className='py-3 text-center' scope="col">Total Views</th>

                        <th className='py-3' scope="col">Action</th>

                    </tr>
                </thead>

                {show?.map((more) => (
                    <tbody>
                        <tr>

                            <td className='text-center'>{more?.name}</td>
                            <td className='text-center'>{more?.rj_name}</td>
                            <td className='text-center'>{more?.time}</td>
                            {/* <td className='text-center'><img className='table-img' src={more?.img} alt="" /></td> */}
                            <td className='text-center'>{more?.duration} min</td>
                            <td className='text-center'>{more?.views}</td>
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