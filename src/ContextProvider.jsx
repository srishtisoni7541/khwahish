import { useState, createContext } from 'react';

export const KhwContext=createContext();

export const ContextProvider=({children})=> {
    const [searchtab, setSearchtab] = useState(false);

    const searchbtn = () => {
        setSearchtab(prev => !prev);
    }

    
    return (
        <KhwContext.Provider value={{searchtab,searchbtn }}>
            {children}
        </KhwContext.Provider>
    )
}




