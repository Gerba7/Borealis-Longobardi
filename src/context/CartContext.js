import { createContext, useState } from 'react';


const CartContext = createContext()

export const CartContextProvider = ({children}) => {

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
                        ...prod,
                        quantity: prod.quantity + quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setProducts(newProducts)
             } else {
            setProducts([...products, newProduct])
             }
    }

    console.log(products)

    const clear = () => {
        setProducts([])
    }

    const isInCart = (id) => {
       return products.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
       const newProducts = products.filter(prod => prod.id !== id)
       setProducts(newProducts)
    }

    const totalQuantity = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.quantity}
            )
        return total
        
    }

    const totalPrice = () => {
        let totPrice = 0
        products.forEach(prod => {
            totPrice= totPrice + (prod.quantity*prod.price)
        })
        return totPrice
    }

    const restoStock = () => {
        let resto = 0
        products.forEach(prod => {
            resto = resto + prod.quantity
        })
        return resto
    }

    console.log(restoStock())
 
    

    return(
        <CartContext.Provider value={{totalQuantity,addItem,clear,removeItem,products,totalPrice,restoStock}}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContext;