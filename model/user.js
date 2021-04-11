const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String
    },
    mobiles: [{
        countryCode: {
            type: String
        },
        mobile: {
            type: String
        },
        isPrimary: {
            type: Boolean
        },
        verificationCode: {
            type: String
        },
        codeExpiresOn: {
            type: Date
        },
        isVerified: {
            type: Boolean
        }
    }],
    emails: [{
        email: {
            type: String
        },
        isPrimary: {
            type: Boolean
        },
        verificationCode: {
            type: String
        },
        codeExpiresOn: {
            type: Date
        },
        isVerified: {
            type: Boolean
        }
    }],
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true })
module.exports = mongoose.model('User', UserSchema)
