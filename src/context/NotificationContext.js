import { createContext, useState } from 'react';



const AlertContext = createContext()

export const AlertContextProvider = ({children}) => {

    const [notifCount,setNotifCount] = useState([])

    const alertCount = (alertCount) => {
        setNotifCount(alertCount)
    }

    

    return(
        <AlertContext.Provider value={{alertCount,}}>
            {children}
        </AlertContext.Provider>
        
    )
}

export default AlertContext;