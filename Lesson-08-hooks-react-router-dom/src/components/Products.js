import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const products = [
    { id: 1, title: "IPhone" },
    { id: 2, title: "Samsung" },
    { id: 3, title: "Huawei" },
  ];

  const onViewDetail = (id) => {
    navigate(`/products/${id}/hungtrinh`);
  };
  return (
    <div>
      {products.map((product) => {
        const { id, title } = product;
        return (
          <div className="card mb-5">
            <h5>{title}</h5>
            <button onClick={() => onViewDetail(id)}>View detials</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
