import { client } from '$lib/graphql-client'
import { projectsQuery, taggedProjectsQuery } from '$lib/graphql-queries'
import { fetchSiteMetadata } from '$stores/site-metadata'

export const load = async ({ params }) => {
    await fetchSiteMetadata()

    const { projects } = await client.request(taggedProjectsQuery, params)

    return {
        projects
    }
}
