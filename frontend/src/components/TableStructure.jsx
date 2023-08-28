import React from 'react';
// import { FaPen,FaTrash } from 'react-icons/fa';

export const TableStructure = ({data}) => {
    return (
        <div>
             <table className="table table-bordered rounded">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price per Qty (Gross) </th>
                                <th scope="col">GST</th>
                                <th scope="col">Price per Qty (net) </th>
                                <th scope="col">Total Stock: </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{product.name}</td>
                                        <td>{product.pricegross}</td>
                                        <td>{product.gst}</td>
                                        <td>{product.pricenet}</td>
                                        <td>{product.quantity}</td>
                                        {/* <td>
                                            <button><FaTrash /></button>
                                        </td> */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
        </div>
    )
}
