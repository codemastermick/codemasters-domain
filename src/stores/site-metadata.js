import { client } from '$lib/graphql-client'
import {
  authorsQuery,
  siteMetadataQuery,
  socialsQuery,
  postTagQuery
} from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const socialsStore = writable([])
export const authorsStore = writable([])
export const siteMetadataStore = writable([])
export const postsStore = writable([])
export const postTagStore = writable([])

export const fetchSocials = async () => {
  const { socials } = await client.request(socialsQuery)
  return socialsStore.set(socials[0])
}

export const fetchAuthors = async () => {
  const { authors } = await client.request(authorsQuery)
  return authorsStore.set(authors[0])
}

export const fetchSiteMetadata = async () => {
  const { projectMetadatas } = await client.request(siteMetadataQuery)
  return siteMetadataStore.set(projectMetadatas[0])
}

export const fetchPostTags = async () => {
  const { posts } = await client.request(postTagQuery)
  const tags = [];
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  });
  return postTagStore.set(tags)
}