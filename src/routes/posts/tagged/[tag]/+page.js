import { client } from '$lib/graphql-client'
import { taggedPostsQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async ({ params }) => {
    await fetchSiteMetadata()

    const { posts } = await client.request(taggedPostsQuery, params)

    return {
        posts,
    }
}
