export interface IArticle {
  display_date: string
  headlines: any
  promo_items: any
  subtype: string
  taxonomy: ITags
  website_url: string
  _id: string
}

export interface ITag {
  slug: string
  text: string
  count?: number
}
export interface ITags {
  tags: ITag[]
}
