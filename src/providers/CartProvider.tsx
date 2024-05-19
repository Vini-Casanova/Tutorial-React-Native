import { createContext } from "react";


const CarContext = createContext({});

const CartProvider = ({ children }) => {
    return(
        <CarContext.Provider 
        value={{items: [], onAddItem: () => {}}}>
            {children}
        </CarContext.Provider>
    );
}

export default CartProvider;