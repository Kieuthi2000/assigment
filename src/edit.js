import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Edit(props) {
  let history = useHistory();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://615e82ad3d1491001755a952.mockapi.io/product/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        reset(data);
      });
  }, [reset]);
  const onSubmit = (data) => {
    fetch("https://615e82ad3d1491001755a952.mockapi.io/product/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.onUpdate(data);
        history.push("/product");
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          {...register("name")}
          defaultValue={product.name}
          className="form-control"
        />
      </div>
      
      <button type="submit" className=" btn-primary">
        ok
      </button>
    </form>
  );
}
