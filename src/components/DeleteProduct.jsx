import { useState } from "react";
import { useDeleteProductMutation } from "../redux/service/MainApi";

function DeleteProduct() {
 const [deleteProduct , {  error ,isLoading }] = useDeleteProductMutation()
 const [deletedProduct , setDeletedProduct] = useState(null)
 const [productId , setProductId] = useState('')

 const handleDelete = async () =>{
    if(!productId){
        alert("plz inter the product Id")
        return ;
    }
    try {
        const response = await deleteProduct(productId).unwrap()
        setDeletedProduct(response)
        setProductId('')
    } catch (err) {
        console.error(err)
    }
 }

    return (
        <>
            {/* Input for Product ID */}
            <input
                type="number"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="Enter product ID"
                style={{ marginBottom: "10px", padding: "5px" }}
            />

            <button
                onClick={handleDelete}
                disabled={isLoading}
                style={{
                    backgroundColor: isLoading ? "grey" : "red",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    marginLeft: "10px",
                }}
            >
                {isLoading ? "Deleting..." : "Delete Product"}
            </button>

            {/* Display success/error messages */}
            {error && <h1 style={{ color: "red" }}>Oops! Something went wrong.</h1>}
            {deletedProduct && (
                <div style={{ marginTop: "20px", color: "green" }}>
                    <h2>Product Deleted Successfully:</h2>
                    <p><strong>Title:</strong> {deletedProduct?.title}</p>
                    <p><strong>ID:</strong> {deletedProduct?.id}</p>
                </div>
            )}
        </>
    );
}

export default DeleteProduct;
