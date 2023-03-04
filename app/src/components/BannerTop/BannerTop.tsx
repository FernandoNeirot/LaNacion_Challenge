import React, { type ReactElement } from 'react'

export const BannerTop = (): ReactElement => {
  return (
    <div className="banner w-100 --bg-banner">
      <div className="banner --top --desktop"></div>
      <div className="banner --top --tablet"></div>
      <div className="banner --top --mobile"></div>
    </div>
  )
}
