const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const tagSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, 'Please provide tag name'],
        unique: [true, "This tag label has been used before"]
    },
    icon: {
        type: String
    },
    tag_slug: {
        type: String
    }
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

tagSchema.pre('save', function (next) {
    if (this.isModified('label')) {
        this.tag_slug = slugify(this.label, {
            trim: true,
            lower: true
        });
    }
    next();
});

module.exports = mongoose.model("Tag", tagSchema)