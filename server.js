const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Route to serve the config file with environment variables
app.get('/config.js', (req, res) => {
    res.type('application/javascript');
    res.send(`const config = {
        API_KEY: '${process.env.TMDB_API_KEY}',
        API_BASE: 'https://api.themoviedb.org/3/',
        IMG_PATH: 'https://image.tmdb.org/t/p/w1280/',
        getMovieURL: function() {
            return \`\${this.API_BASE}discover/movie?sort_by=popularity.desc&api_key=\${this.API_KEY}&page=1\`;
        },
        getTVURL: function() {
            return \`\${this.API_BASE}discover/tv?sort_by=popularity.desc&api_key=\${this.API_KEY}&page=1\`;
        },
        getSearchURL: function() {
            return \`\${this.API_BASE}search/movie?api_key=\${this.API_KEY}&page=1&query="\`;
        }
    };`);
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server if running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Export the Express API
module.exports = app;