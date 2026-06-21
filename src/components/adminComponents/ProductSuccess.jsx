import { useNavigate, useParams } from "react-router-dom"


export const ProductSuccess = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  return(
    <section className="success-page">
        <h2>Producto cargado con éxito ✅ </h2>
        <p>ID de producto: <strong>{id}</strong></p>
        <p>Puede cargar otro haciendo click en el botón.</p>

        <button
            className="btn bg-primary primary"
            onClick={() => navigate("/admin", {replace: true})}
        >
            Agregar otro producto
        </button>

    </section>
  );
}

