import axios from "axios";

export const instance = axios.create({
  baseURL: "https://oauth.reddit.com/",
});

export const userApi = {
  async authMe(token: string) {
    const response = await instance.get('api/v1/me',
      {
        headers: {Authorization: `bearer ${token}`}
      })
    return response.data
  },
  async getUserData(token: string, name: string) {
    const response = await instance.get(`user/${name}/about`, {
      headers: {Authorization: `bearer ${token}`}
    })
    return response.data.data
  }
}

export const postsApi = {
  async getComments(token: string, postId: string) {
    const response = await instance.get(`comments/${postId}.json?limit=25`, {
      headers: {Authorization: `bearer ${token}`}
    })
    return response.data
  },
  async getBestPosts(token: string, after: string | null) {
    const response = await instance.get('best.json', {
      headers: {Authorization: `bearer ${token}`},
      params: {limit: 10, after: after}
    })
    return response.data
  }
}