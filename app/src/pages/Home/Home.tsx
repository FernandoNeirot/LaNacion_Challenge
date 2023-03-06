import React, { type ReactElement } from 'react'

import { ContentTags } from '../../components/components/ContentTags'
import { BannerTop } from '../../components/BannerTop/BannerTop'

import ArticleList from '../../components/ArticleList/ArticleList'
import { ArticleProvider } from '../../contexts/ArticleProvider'

export const Home = (): ReactElement => {
  return (
    <React.Fragment>
      <ArticleProvider>
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
              <ArticleList />
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
      </ArticleProvider>
    </React.Fragment>
  )
}
