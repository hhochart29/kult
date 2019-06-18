import gql from 'graphql-tag'

export const allVideos = gql`
  {
    allVideos {
      id
      title
      description
      date
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
