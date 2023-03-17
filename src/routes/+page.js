import { client } from '$lib/graphql-client'
import { authorsQuery, projectsQuery, postTagQuery } from '$lib/graphql-queries'
import {
  fetchAuthors,
  fetchSiteMetadata,
  fetchPostTags,
} from '$stores/site-metadata'

export const load = async () => {
  await fetchAuthors()
  await fetchSiteMetadata()
  await fetchPostTags()

  const [authorRes, projectsRes, tagsRes] = await Promise.all([
    client.request(authorsQuery),
    client.request(projectsQuery),
    client.request(postTagQuery)
  ])
  const { authors } = authorRes
  const { projects } = projectsRes
  const { tags } = tagsRes

  return {
    projects,
    authors,
    tags
  }
}
