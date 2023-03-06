export interface IArticle {
  display_date: string
  headlines: IHeadline
  promo_items: IPromoItem
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

export interface IHeadline {
  basic: string
}

export interface IPromoItem {
  basic: IPromoItemBasic
}

export interface IPromoItemBasic {
  resizedUrls: any[]
  subtitle: string
  type: string
  url: string
}
