import { type IArticle, type ITag } from '../interfaces/IArticle'
import { type IMonth } from '../interfaces/IMonth'
import { MONTHS } from './constants'

export const getMonthsFormatted = (date: Date | string): string => {
  const newDate = new Date(date)
  const month = MONTHS.find(
    (month: IMonth) => month.id === newDate.getMonth()
  )?.label

  return `${newDate.getDate()} de ${month} de ${newDate.getFullYear()}`
}

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getTags = (articles: IArticle[]): ITag[] => {
  const tags: ITag[] = []
  // Armo array con tags
  articles.forEach((article: IArticle) => {
    article.taxonomy.tags.forEach((tag: ITag) => {
      tag.text = capitalizeFirstLetter(tag.text)
      tag.count = 1
      tags.push(tag)
    })
  })

  // Agrupo y totalizo tags
  const tagsGrouped = tags.reduce((acum: any, current: ITag) => {
    const elementExists: boolean = acum.find(
      (elemento: ITag) => elemento.text === current.text
    )
    if (elementExists) {
      return acum.map((elemento: ITag) => {
        if (elemento.text === current.text) {
          return {
            ...elemento,
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            count: (elemento.count ?? 1) + (current.count ?? 1)
          }
        }

        return elemento
      })
    }

    return [...acum, current]
  }, [])

  // Ordeno tags
  tagsGrouped.sort((a: ITag, b: ITag) =>
    (a.count ?? 0) > (b.count ?? 0)
      ? -1
      : (a.count ?? 0) < (b.count ?? 0)
      ? 1
      : 0
  )

  return tagsGrouped
}
