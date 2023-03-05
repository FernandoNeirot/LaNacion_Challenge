import React, { type ReactElement } from 'react'
import { Article } from '../../components/Article/Article'
import { ContentTags } from '../../components/components/ContentTags'
import { BannerTop } from '../../components/BannerTop/BannerTop'
import { services } from '../../services/services'
import { type ITag, type IArticle } from '../../interfaces/IArticle'

export const Home = (): ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [articles, setArticles] = React.useState<IArticle[]>([])

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

  React.useEffect(() => {
    setLoading(true)
    services
      .getData()()
      .then((res) => {
        console.log(res)
        const articles = getArticlesWithTagsOrder(res.articles)
        setArticles(articles)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <React.Fragment>
      <main>
        {/* BANNER TOP */}
        <BannerTop />
        {/* BANNER STICKY */}
        <div className="banner w-100 --bg-banner">
          <div className="banner --sticky --mobile"></div>
        </div>
        <div className="lay-sidebar">
          <div className="sidebar__main">
            <div className="row">
              <div className="com-titleWithfollow hlp-marginBottom-15">
                <h1 className="com-title-section-xl hlp-marginBottom-40">
                  Acumulado Grilla
                </h1>
              </div>
            </div>
            <div className="row">
              <ContentTags />
            </div>
            {loading ? (
              'Cargando...'
            ) : (
              <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                {articles.map((article: IArticle) => {
                  return <Article key={article._id} article={article} />
                })}
                {/* BANNER SMALL MOBILE */}
                <div className="banner --small --mobile"></div>
              </section>
            )}
            <section className="row">
              <div className="col-12 hlp-text-center hlp-margintop-40">
                <button className="--btn --secondary">
                  MÁS NOTAS DE ACUMULADO GRILLA
                </button>
              </div>
            </section>
          </div>
          <div className="sidebar__aside">
            <div className="banner --desktop --large"></div>

            <div className="banner --desktop --large"></div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
