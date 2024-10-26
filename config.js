const config = {
    API_BASE: 'https://api.themoviedb.org/3/',
    IMG_PATH: 'https://image.tmdb.org/t/p/w1280/',
    getMovieURL: function() {
        return `${this.API_BASE}discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}&page=1`;
    },
    getTVURL: function() {
        return `${this.API_BASE}discover/tv?sort_by=popularity.desc&api_key=${this.API_KEY}&page=1`;
    },
    getSearchURL: function() {
        return `${this.API_BASE}search/movie?api_key=${this.API_KEY}&page=1&query="`;
    }
};