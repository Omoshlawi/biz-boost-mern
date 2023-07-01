const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json()) // enables midle where that  converts request body to json object
const business = [
    { id: 1, name: "Biz One" },
    { id: 2, name: "Biz two" },
    { id: 3, name: "Biz three" },
    { id: 4, name: "Biz four" },
]
app.get("/businesses/", (req, res) => {
    res.json({
        query: req.query,
        results: business.map(business => ({ url: '/businesses/' + business.id + "/", ...business }))
    })
});
app.get("/businesses/:id", (req, res) => {
    const bus = business.find((business) => req.params.id === String(business.id))
    if (!bus) return res.status(404).json({ code: 404, detail: "No such business found" })
    res.json(bus)
});
app.post("/businesses/", (req, res) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(4)
            .required(),
        created: Joi.date().required()
    })
    const { error, value, warning } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({ detail: error.details.map(detail => detail.message).join(';') })
    }
    res.send(value)
});
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Listening on port  ${PORT}....`);
})