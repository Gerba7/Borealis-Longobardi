import { createContext, useState } from 'react';
import { Alert } from 'reactstrap';


const AlertContext = createContext()

export const AlertContextProvider = ({children}) => {

    const [modal,setModal] = useState([])
   
    const modal = () => {
        return <Alert> products were added to your Cart!</Alert>
    }

 
    

    return(
        <AlertContext.Provider value={{}}>
            {children}
        </AlertContext.Provider>
        
    )
}

export default AlertContext;