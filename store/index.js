/* eslint-disable no-console */
export const actions = {
  async nuxtServerInit ({ dispatch }) {
    try {
      await dispatch('cms/getContent')
    } catch (err) {
      console.error(err)
    }
  }
}
