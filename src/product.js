import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from "react-router-dom";
export default function Product(props) {
  const remove = async (id) => {
    try {
      await fetch(
        "https://615e82ad3d1491001755a952.mockapi.io/product/" + id,
        {
          method: "DELETE",
        }
      );
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>
                <Link to={"/product/detail/" + product.id}>{product.name}</Link>
              </td>
             
              <td>
                <button
                  className=" btn-info"
                  onClick={() => remove(product.id)}
                >
                  Xóa
                </button>
              </td>
              <td>
                <div className="btn-group">
                  <Link
                    role="button"
                    className=" btn-info"
                    to={"/product/edit/" + product.id}
                  >
                    Chỉnh sửa
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
