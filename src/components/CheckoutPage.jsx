import React from 'react';
import { Button, Icon } from 'react-materialize';

const CheckoutPage = ({ products }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>SKU</th>
                </tr>
                {products.map((product, idx) => (
                    <tr key={idx}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.sku}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CheckoutPage;