const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name: {
        type: string,
        required: [true, "Please provide category"],
        unique: [true, "This Category Title has been you before"]
    },
    slug: {
        type: string
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

CategorySchema.pre('save', function (next) {
    if (this.isModified('name')) {
        this.slug = slugify(this.label, {
            trim: true,
            lower: true
        });
    }
    next();
});

module.exports = mongoose.model("Category", CategorySchema)