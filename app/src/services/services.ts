const URL = process.env.REACT_APP_URL

export const services = {
  getArticles: () => {
    return { url: URL, options: { method: 'GET' } }
  }
}
