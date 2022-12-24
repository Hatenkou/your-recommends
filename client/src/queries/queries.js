import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
query Movies($filter: MoviesFilterInput) {
    movies(filter: $filter) {
    page
    totalResults
    totalPages
    results {
      id
      title
      releaseDate(format: "dd.MM.yyyy")
      image:posterPath
      imageBg:backdropPath
      voteAverage
    }
  }
}

`

export const MOVIES_BY_IDS_QUERY = gql`
query MoviesByIds($ids: [Int]) {
  moviesByIds(ids: $ids) {
      id
      title
      releaseDate(format: "dd.MM.yyyy")
      image:posterPath
      imageBg:backdropPath
      voteAverage
    }
}

`

export const MOVIE_BY_ID_QUERY = gql`
query moviePage($id: Int) {
  moviePage (id:$id) {
    id
    title
    originalTitle
    releaseDate(format: "dd.MM.yyyy")
    image:posterPath
    imageBg:backdropPath
    abult
    overview
    originalLanguege
    popularity
    voteCount
    video
    voteAverage
    tagline
    runTime:runtime
    genres{
      id
      name
    }
  }
}

`
export const GENRES_QUERY = gql`
query Genres {
    genres {
        id
        name
    }
}
`

export const MOVIE_VIDEO_QUERY = gql`
query movieVideo($videoId: Int) {
  movieVideo(videoId: $videoId) {
    id
    results {
      iso_3166_1
      iso_639_1
      key
      name
      official
      published_at
      site
      size
      type
      id
    }
  }
}

` 
