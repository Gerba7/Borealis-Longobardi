    import { useState, useEffect } from "react";
    import { useParams } from 'react-router-dom';
    import ItemDetail from './ItemDetail';


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
            pictureUrl: '/assets/cerveza-standard.png',
            stock: 20,
        },
        {
            id: 2,
            title: 'Imperial Stout',
            price: '$290',
            description: '',
            pictureUrl: '/assets/cerveza-standard.png',
            stock: 12,
        },
        {
            id: 3,
            title: 'Heffeweisen',
            price: '$230',
            description: '',
            pictureUrl: '/assets/cerveza-standard.png',
            stock: 23,
        }
    ]

    

    const getItem = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(beers), 2000)
        });
    }


    const ItemDetailContainer = () => {

        const { id } = useParams();
        const [itemDetail, setItemDetail] = useState([])
        

        useEffect(() => {

            const item = getItem()
            item.then(result => {
            const itemDetail = result.find(prod => prod.id === parseInt(id))
            setItemDetail(itemDetail)
            })
            return(() => {
                setItemDetail()
            })
        }, [id])

        if(itemDetail.lenght === 0) {
            return <h1>Loading . . .</h1>
        }

        return(
            <div>
                <ItemDetail details={itemDetail} />
            </div>
        )
            
            

    }

    export default ItemDetailContainer;