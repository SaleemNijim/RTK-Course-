import React, { useState } from 'react';
import { useUpdateProductMutation } from '../redux/service/MainApi';



const UpdateProduct = () => {
 const [updateProduct , { isLoading  , error}] = useUpdateProductMutation()
 const [formData ,setFromData ]= useState({
    productId:'',
    price:'',
    title:''
})

const handleSubmit = async (e) =>{

    e.preventDefault()
    if(!formData.price || !formData.title||!formData.productId){
        alert("plesa fill all the fileds")
    }

    try {
        await updateProduct({
            id:formData.productId,
            title:formData.title,
            price:formData.price
        }).unwrap()

        setFromData({
            productId:'',
            price:'',
            title:''})
            alert("Product Updated Successfully")
    } catch (err) {
        console.error(err)
    }

}
const handleChange = (e) =>{
    const {name , value} = e.target
    setFromData(prev => ({...prev , [name]:value}))
}



 const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: 'white'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  };

  const inputGroupStyle = {
    marginBottom: '15px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#666'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '5px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: isLoading ? '#ccc' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: isLoading ? 'not-allowed' : 'pointer'
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
    fontSize: '14px',
    textAlign: 'center'
  };


  return (
    <div style={formStyle}>
      <h2 style={titleStyle}>Update Product</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>
            Product ID:
            <input
              type="number"
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter product ID"
            />
          </label>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter product title"
            />
          </label>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter price"
              step="0.01"
            />
          </label>
        </div>

        {error && (
          <div style={errorStyle}>
            {error.data?.message || 'An error occurred while updating the product'}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          style={buttonStyle}
        >
          {isLoading ? 'Updating...' : 'Update Product'}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;