import gql from 'graphql-tag'

export const allVideos = gql`
  {
    allVideos {
      id
      _publishedAt
      title
      description
      producer {
        nameFirstname
      }
      tags {
        tag
      }
      videoUrl
      coverImage {
        url
        alt
      }
      category {
        name
        color {
          hex
        }
      }
    }
  }
`
