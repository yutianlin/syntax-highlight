import Joi from "joi";

export const createDocument = Joi.object({
    file_ending: Joi.string().required(),
    document: Joi.string().required()
});

export const getDocuments = Joi.object({
    match: {file_ending: Joi.string()}
});