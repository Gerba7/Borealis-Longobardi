import { createContext, useState } from 'react';


const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [quantity,setQuantity] = useState(0)
    const [products,setProducts] = useState([])
   

    const addItem = (item,quantity) => {
        const newProduct = {
            ...item,
            quantity: quantity
        }

        if (isInCart(item.id)) { 
            const newProducts = products.map(prod => {
                if (prod.id === item.id) { 
                    const newProduct = {
                        ...products,
                        quantity: quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setProducts(newProducts)
             }
            setProducts([...products, newProduct])
        
    }

    console.log(quantity)
    console.log(products)

    const clear = () => {
        setProducts([])
    }

    const isInCart = (id) => {
       return products.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        products.delete(prod => prod.id === products.id)
    }






    return(
        <CartContext.Provider value={{quantity,setQuantity,addItem,clear,removeItem}}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContext;