const Tags = require("../models/tags.model")
const asyncHandler = require("express-async-handler");
const slugify = require('slugify');
const GetAllTags = asyncHandler(async (req, res, next) => {
    const results = await Tags.find({});
    if (!results) {
        return next(new Error("No tags found"))
    }
    return res.status(200).json({
        message: "Get All Tags Successfully!",
        data: results
    })
})

const AddTag = asyncHandler(async (req, res, next) => {
    const { label } = req.body


    const results = await Tags.create({ label })
    if (!results) {
        return next(new Error("Error when creating tag"))
    }
    return res.status(200).json({
        message: "Create new Tag successfully",
        data: results
    })
})

const UpdateTag = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { label } = req.body;
    const tag_slug = slugify(label, {
        trim: true,
        lower: true
    });
    const results = await Tags.findByIdAndUpdate(id, { label, tag_slug }, { new: true, runValidators: true });

    if (!results) {
        return next(new Error("Error when updating tag"));
    }

    return res.status(201).json({
        message: "Update Successfully",
        data: results
    });
})


module.exports = {
    AddTag,
    UpdateTag,
    GetAllTags
}