import { createContext, useState } from 'react';

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [quantity,setQuantity] = useState(0)
    const [item,setItem] = useState(undefined)

    const addItem = (item,quantity) => {
        setQuantity(quantity)
        setItem(item)
    }

    console.log(addItem)

    const clear = () => {
        setQuantity(0)
        setItem(undefined)
    }

    const newProduct = {
        ...item,
        quantity: quantity
    }

    const addedProducts = []

    const addProduct = () => {
        return [...addedProducts,newProduct]
    }

    /*const isInCart = item.find(prod => prod.id === item.id)*/
    
    /*addProduct()*/

    

    console.log(addedProducts)


    return(
        <CartContext.Provider value={quantity,item,addItem,addedProducts}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContext;