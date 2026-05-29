import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base': 'Your brand didnt match pattern'}),
    year: Joi.number().min(0).max(1000000).messages({
        'number.min': 'min price is 0',
        'number.max': 'min price is 1000000'
    }),
    price: Joi.number().min(1990).max(2024).messages({
        'number.min': 'min year is 1990',
        'number.max': 'min year is 2024'
    }),
})