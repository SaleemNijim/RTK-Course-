import { useState } from "react"
import { useGetProductByIdQuery } from "../redux/service/MainApi"


function SpaceficProduct () {
    const [productId , setProductId] = useState(10)
    const {isError , isLoading , data} = useGetProductByIdQuery(productId)

    if(isError) return <h1>there is somethig wrong</h1>
   

   if(isLoading) return  <p>isLoading...</p>

   const styles = {
    brand: { color: 'blue', fontSize: '24px' },
    category: { color: 'green', fontSize: '20px' },
    description: { color: 'gray', fontSize: '16px' }
};

   return (
    <>
        <input
            type="number"
            defaultValue={productId}
            onChange={(e) => setProductId(Number(e.target.value) || 1)}
            placeholder="Enter product ID"
        />
        {data ? (
            <>
                <h1 style={styles.brand}>{data.brand}</h1>
                <h1 style={styles.category}>{data.category}</h1>
                <h1 style={styles.description}>{data.description}</h1>
            </>
        ):(
            <h1>Product not found!</h1>
        )}
    </>
);


}
 
export default SpaceficProduct