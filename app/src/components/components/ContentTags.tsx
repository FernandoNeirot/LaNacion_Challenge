import React, { type ReactElement } from 'react'
import { useArticleContext } from '../../contexts/ArticleProvider'
import { type ITag } from '../../interfaces/IArticle'

export const ContentTags = (): ReactElement => {
  const { tags } = useArticleContext()
  return (
    <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
      {tags.map((tag: ITag) => {
        return (
          <a key={tag.slug} href={`/tema/${tag.slug}`} className="">
            {tag.text}
          </a>
        )
      })}
    </div>
  )
}
