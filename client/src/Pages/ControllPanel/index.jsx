import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";
import { Delete, UserList, UsersTable } from "./style";
import axios from "axios";

export default function ControllPanel() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/product`);
      setProducts(data.data.product);
      console.log(data.data.product);
    };
    getProducts();
  }, []);

  return (
    <>
      <UserList>
        {isLoading ? (
          <div>"Loading..."</div>
        ) : (
          <UsersTable>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product details</th>
              <th>delete</th>
            </tr>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>
                  <Link>product details</Link>
                </td>
                <td>
                  <Delete>
                    <RiDeleteBin6Line />
                  </Delete>
                </td>
              </tr>
            ))}
          </UsersTable>
        )}
      </UserList>
    </>
  );
}
