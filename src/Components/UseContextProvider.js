import React ,{createContext, useState} from 'react'

const ColorContext = createContext();


function UseContextProvider({children}) {
  const [data,setData] = useState("white");
  const changeData = (ColorContext) => {
    setData(ColorContext)
  }
  return (
    <ColorContext.Provider value= {{data , changeData}}>

    {children}
      </ColorContext.Provider>
  )
}

export { UseContextProvider , ColorContext }