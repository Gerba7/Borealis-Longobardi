import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const beers = [
    {
        id: 0,
        title: 'Golden Ale',
        price: '$250',
        description: '',
        pictureUrl: '/assets/cerveza-standard.png',
        stock: 25,
    },
    {
        id: 1,
        title: 'Irish Ale',
        price: '$270',
        description: '',
        pictureUrl: './assets/cerveza-standard.png',
        stock: 20,
    },
    {
        id: 2,
        title: 'Imperial Stout',
        price: '$290',
        description: '',
        pictureUrl: './assets/cerveza-standard.png',
        stock: 12,
    },
    {
        id: 3,
        title: 'Heffeweisen',
        price: '$230',
        description: '',
        pictureUrl: './assets/cerveza-standard.png',
        stock: 23,
    }
]


const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(beers), 2000);
    });
}


const ItemListContainer = (props) => {

    const [listBeer, setListBeer] = useState([])

    useEffect(() => {
        const items = getProducts()

        items.then(result => {
            console.log(result)
            setListBeer(result)
        })
    }, [])

    return(
        <div>
            <ItemList beers={listBeer} />
        </div>
    )

    /*return(
        <div className="container">
            <h1 className="mt-5 text-center" id="greeting">Hello</h1>
            <h1 className="mt-5 text-center" id="greeting2">{props.name}!</h1>
            <ItemCount stock="25" initial="0" />
            <ItemList />
        </div>        
    );*/
    
}




export default ItemListContainer;