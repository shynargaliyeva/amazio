import React from 'react';
import { Button } from 'react-materialize';

const CataloguePage = ({ products, handleAddToCart }) => {
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
                    <td><Button floating waves='light' icon='add' 
                                product={product}
                                onClick={() => handleAddToCart(product)} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default CataloguePage;