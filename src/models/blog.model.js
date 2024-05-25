const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide blog title"],
        unique: [true, "This title has been you before"]
    },
    short_description: {
        type: String,
        required: [true, "Please provide short description"],
    },
    slug: String,
    content: {
        type: String,
        required: [true, "Please provide blog content"]
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    id: false
})

module.exports = mongoose.model("Blog", BlogSchema)