import React, {
  createContext,
  useContext,
  type ReactElement,
  type ReactNode
} from 'react'

interface IProps {
  children: ReactNode
}

const ArticleContext = createContext({})

export const useArticleContext = (): any => useContext(ArticleContext)

export const ArticleProvider = ({ children }: IProps): ReactElement => {
  const [tags, setTags] = React.useState<string[]>(['Arroz', 'Leche'])
  return (
    <ArticleContext.Provider value={{ tags, setTags }}>
      {children}
    </ArticleContext.Provider>
  )
}
