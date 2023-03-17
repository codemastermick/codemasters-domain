import { gql } from 'graphql-request'
export const authorsQuery = gql`
  query GetAuthors {
    authors {
      name
      intro
      bio
      slug
      picture {
        url
      }
    }
  }
`

const PROJECT_FRAGMENT = gql`
  fragment ProjectDetails on Project {
    name
    slug
    description
    tags
    demo
    sourceCode
    image {
      url
    }
  }
`

export const projectsQuery = gql`
  ${PROJECT_FRAGMENT}
  query GetProjects {
    projects(orderBy: publishedAt_DESC) {
      ...ProjectDetails
    }
  }
`

export const projectQuery = gql`
  ${PROJECT_FRAGMENT}
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      ...ProjectDetails
    }
  }
`

const POST_FRAGMENT = gql`
  fragment PostDetails on Post {
    title
    slug
    createdAt
    updatedAt
    content
    tags
    coverImage {
      url
    }
    authors {
      name
    }
  }
`

export const postsQuery = gql`
  ${POST_FRAGMENT}
  query GetPosts {
    posts {
      ...PostDetails
    }
  }
`

export const postQuery = gql`
  ${POST_FRAGMENT}
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      ...PostDetails
    }
  }
`

export const socialsQuery = gql`
  query GetSocials {
    socials {
      twitterUrl
      youTubeUrl
      facebookUrl
      mastodonUrl
      instagramUrl
      linkedInUrl
      snapchatUrl
    }
  }
`

export const siteMetadataQuery = gql`
  query GetProjectMetadatas {
    projectMetadatas {
      name
      siteUrl
      description
      openGraphDefaultImage {
        url(
          transformation: {
            image: { resize: { width: 1200, height: 630, fit: clip } }
          }
        )
      }
      establishedYear
    }
  }
`

export const taggedPostsQuery = gql`
  ${POST_FRAGMENT}
  query GetPosts($tag:String!) {
    posts(where:{tags_contains_some:[$tag]}) {
      ...PostDetails
    }
  }
`

export const taggedProjectsQuery = gql`
  ${PROJECT_FRAGMENT}
  query GetProjects($tag:String!) {
    projects(where:{tags_contains_some:[$tag]}) {
      ...ProjectDetails
    }
  }
`

export const postTagQuery = gql`
  ${POST_FRAGMENT}
  query AllTags {
    posts(orderBy: publishedAt_DESC){
      tags
    }
  }
  `


// export const projectQuery = gql`
//   ${PROJECT_FRAGMENT}
//   query GetProject($slug: String!) {
//     project(where: { slug: $slug }) {
//       ...ProjectDetails
//     }
//   }
// `