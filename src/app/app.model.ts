export interface Filmes {
  id: number
  popularity: number
  vote_count: number
  poster_path: string
  title: string
  vote_average: number
  overview: string
}

export interface Filme {
  id: number
  backdrop_path: string
  budget: number
  genres: []
  imdb_id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: []
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}
