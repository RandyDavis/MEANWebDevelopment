/**
 * Created by randy on 3/24/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        validate: [
            function (password) {
                return password.length >= 6;
            },
            'Password should be longer!'
        ]
    },
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
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

UserSchema.statics.findOneByUsername = function (username, callback) {
    this.findOne({ username: new RegExp(username, 'i') }, callback);
};

UserSchema.methods.authenticate = function (password) {
    return this.password === password;
};

UserSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', UserSchema);
mongoose.model('Post', PostSchema);