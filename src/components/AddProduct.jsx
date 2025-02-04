import { useState } from 'react'
import {useAddProductMutation  } from '../redux/service/MainApi'



function AddProduct () {
    const [ addProduct, {data  , error , isLoading}] = useAddProductMutation()
    const [formData ,setFromData ]= useState({
        title:'',
        price:'',
        description:''
    })
    const handleChange = (e) =>{
        setFromData({
            ...formData ,
            [e.target.name] : e.target.value
        })

    }
    
    const handleAddProduct = async (e) =>{
        e.preventDefault()

        try {
            await addProduct(formData)
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <div>
            <h2>Add New Product</h2>
            {error && <h1>Oops! Something went wrong.</h1>}
            {isLoading && <div>Loading...</div>}

            <form onSubmit={handleAddProduct}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit" disabled={isLoading}>Add New Product</button>
            </form>

            {data && (
                <div>
                    <h3>New Product Added</h3>
                    <p><strong>Title:</strong> {data.title}</p>
                    <p><strong>Price:</strong> ${data.price}</p>
                    <p><strong>Description:</strong> {data.description}</p>
                </div>
            )}
        </div>
  )

}

export default AddProduct