import React, { type ReactElement } from 'react'
import { type IArticle } from '../../interfaces/IArticle'
import NotFound from '../../assets/NotFound.jpg'
import { getMonthsFormatted } from '../../utils/functions'
export interface IProps {
  article: IArticle
}

export const Article: React.FC<IProps> = ({ article }): ReactElement => {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section id="" className="cont-figure">
        <a href={`/${article.website_url}`} className="figure">
          <picture id="" className="content-pic picture">
            <img
              src={article?.promo_items?.basic?.url ?? NotFound}
              alt=""
              className="content-img"
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="/">
            <b>{article?.headlines?.basic ?? ''}</b>
          </a>
        </h2>
        <h4 className="com-date">{getMonthsFormatted(article.display_date)}</h4>
      </div>
    </article>
  )
}
