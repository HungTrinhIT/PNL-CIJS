import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [id, setId] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    //   Call API with id heres
    setId(params.id);
  }, []);

  return <div>ProductDetail: {id}</div>;
};

export default ProductDetail;
