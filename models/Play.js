const mongoose = require('mongoose');

const PlaySchema = mongoose.Schema({
        title: String,
        performance_info: String,
        interpark_link: String,
        yes24_link: String,
        poster: String,
        theater_id: String,
        playtime: String,
        age_restriction: String,
        genre: String,
        synopsis: String,
        actor_id_list: Array,
        actor_role_lst: Array,
    },
    {
        collection: 'play',
    }
);

module.exports = mongoose.model('Plays', PlaySchema);