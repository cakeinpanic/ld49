import React, { useEffect, useState } from 'react'

export interface ILoadedContext {
  soundLoaded?: Function
  imagesAreLoaded?: Function
}

export const LoadedContext = React.createContext<ILoadedContext>({  })

export function LoadedContextProvider({ children, setAllIsLoaded }: { children: any, setAllIsLoaded: Function }) {
  const [sound, setSound] = useState(false)
  const [images, setImages] = useState(false)

  useEffect(() => {
    setTimeout(setAllIsLoaded(sound && images),1000)
  }, [sound, images, setAllIsLoaded])

  return (
    <LoadedContext.Provider value={
      {
        soundLoaded: setSound,
        imagesAreLoaded: setImages,
      }
    }>
      {children}
    </LoadedContext.Provider>
  )
}
