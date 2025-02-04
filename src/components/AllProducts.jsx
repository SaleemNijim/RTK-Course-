import { useGetAllProductsQuery } from "../redux/service/MainApi";

function AllProducts() {
    
    const {isError , data ,isLoading  } = useGetAllProductsQuery()

   if(isError) return <h1>there is somethig wrong</h1>
   
   
   if(isLoading) return  <p>isLoading...</p>
    

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {data?.products.map((p) => (
                <div key={p.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <h1 style={{ fontSize: '24px', color: '#333' }}>{p.title}</h1>
                    <p style={{ fontSize: '16px', color: '#666' }}>{p.description}</p>
                </div>
            ))}
        </div>
    );
}

export default AllProducts;
