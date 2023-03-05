const URL = process.env.REACT_APP_URL

export const services = {
  getData: () => async (): Promise<any> => {
    try {
      const response = fetch(`${URL}`).then(async (res) => await res.json())
      return await response
    } catch (error) {
      throw new Error('Error')
    }
  }
}
