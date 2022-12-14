class Video {
   constructor(video) {
      this.id = video.id
      this.result = video.result = new ResultsVideo(video)
   }
}


class ResultsVideo {
   constructor(video) {
      this.iso_639_1 = video.iso_639_1
      this.iso_3166_1 = video.iso_3166_1
      this.name = video.name
      this.key = video.key
      this.site = video.site
      this.size = video.size
      this.type = video.type
      this.official = video.official
      this.published_at = video.published_at
      this.id = video.id
   }
}

module.exports = {
   Video
} 