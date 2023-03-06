import React, { type ReactElement } from 'react'
import { useArticleContext } from '../../contexts/ArticleProvider'
import useServices from '../../custumHook/useService'
import { type IArticle } from '../../interfaces/IArticle'
import { getTags } from '../../utils/functios'

import { Article } from '../Article/Article'

const ArticleList = (): ReactElement => {
  const [articles, setArticles] = React.useState<IArticle[]>([])
  const [results, error] = useServices()
  const { setTags } = useArticleContext()

  const getArticlesWithTagsOrder = (articles: IArticle[]): IArticle[] => {
    const newArray = articles.filter((item: IArticle) => item.subtype === '7')

    return newArray
  }

  if (results === null) <></>
  React.useEffect(() => {
    if (error !== null) console.error('Error')
  }, [error])

  React.useEffect(() => {
    if (results !== null && results?.articles.length > 0) {
      const tags = getTags(articles).slice(0, 10)

      setTags(tags)
      setArticles(getArticlesWithTagsOrder(results.articles))
    }
  }, [results])

  return (
    <React.Fragment>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        {articles.map((article: IArticle) => {
          return <Article key={article._id} article={article} />
        })}
        {/* BANNER SMALL MOBILE */}
        <div className="banner --small --mobile"></div>
      </section>
    </React.Fragment>
  )
}

export default ArticleList
