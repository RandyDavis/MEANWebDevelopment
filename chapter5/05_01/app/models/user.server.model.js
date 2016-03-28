/**
 * Created by randy on 3/24/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        trim: true
    },
    password: String,
    website: {
        type: String,
        // Use setter when not using getter when applicable
        // set: function (url) {
        //     if (!url) {
        //         return url;
        //     } else {
        //         if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
        //             url = 'http://' + url;
        //         }
        //         return url;
        //     }
        // },
        get: function (url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                }
                return url;
            }
        }
    },
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.set('toJSON', { getters: true });

mongoose.model('User', UserSchema);