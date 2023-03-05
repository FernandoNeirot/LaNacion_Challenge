import React, { type ReactElement } from 'react'
import useServices from '../../custumHook/useService'
import { type ITag, type IArticle } from '../../interfaces/IArticle'
import { Article } from '../Article/Article'

const ArticleList = (): ReactElement => {
  const [articles, setArticles] = React.useState<IArticle[]>([])
  console.log(articles)
  const [results, error] = useServices()
  const getTags = (articles: IArticle[]): string[] => {
    const tags: string[] = []
    articles.forEach((article: IArticle) => {
      article.taxonomy.tags.forEach((tag: ITag) => {
        tags.push(tag.text)
      })
    })
    return tags
  }

  const getArticlesWithTagsOrder = (articles: IArticle[]): IArticle[] => {
    const newArray = articles.map((article: IArticle) => {
      article.taxonomy.tags.forEach((tag: ITag) => {
        tag.count = getTags(articles).filter(
          (item: string) => item === tag.text
        ).length
      })
      article.taxonomy.tags.sort((a: ITag, b: ITag) =>
        a.text > b.text ? -1 : a.text < b.text ? 1 : 0
      )
      return article
    })
    return newArray
  }

  if (results === null) <></>
  React.useEffect(() => {
    console.log('Error')
  }, [error])

  React.useEffect(() => {
    if (results !== null && results?.articles.length > 0) {
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
