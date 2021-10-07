import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Detail() {
  let history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://615e82ad3d1491001755a952.mockapi.io/product/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className="card" style={{ width: "18rem" }} align="center">
      <img src={product.avatar} className="card-img-top" />
      
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{product.id}</li>
        <li className="list-group-item">{product.name}</li>
        
      </ul>
    </div>
  );
}
