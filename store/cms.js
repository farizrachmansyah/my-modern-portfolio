/* eslint-disable no-console */
import client from '~/plugins/contentful'

export const state = () => ({
  content: {}
})

export const mutations = {
  UPDATE_CONTENT: (state, data) => {
    state.content[data.contentType] = data.items
  }
}

export const actions = {
  async getContent ({ commit }) {
    try {
      if (!client) { return }
      // ELSE
      await Promise.all([
        client.getEntries({
          content_type: 'menu',
          order: 'sys.createdAt'
        }),
        client.getEntries({
          content_type: 'about',
          order: 'sys.createdAt'
        }),
        client.getEntries({
          content_type: 'tools',
          order: 'sys.createdAt'
        }),
        client.getEntries({
          content_type: 'company',
          order: 'sys.createdAt'
        }),
        client.getEntries({
          content_type: 'employmentType',
          order: 'sys.createdAt'
        }),
        client.getEntries({
          content_type: 'experience',
          order: 'sys.createdAt'
        }),
        client.getEntries({
          content_type: 'projects',
          order: 'sys.createdAt'
        }),
        client.getAsset(process.env.CONTENTFUL_RESUME_ID)
      ]).then((responses) => {
        responses.forEach((res) => {
          if (res.sys.type === 'Asset') {
            const contentType = 'resume'
            commit('UPDATE_CONTENT', ({ contentType, items: res }))
          } else if (res.items.length) {
            const contentType = res.items[0].sys.contentType.sys.id
            commit('UPDATE_CONTENT', ({ contentType, items: res.items }))
          }
        })
      })
    } catch (err) {
      console.error(err)
    }
  }
}
