const express = require('express');

const app = express();
const business = [
    { id: 1, name: "Biz One" },
    { id: 2, name: "Biz two" },
    { id: 3, name: "Biz three" },
    { id: 4, name: "Biz four" },
]
app.get("/businesses/", (req, res) => {
    res.json(business)
});
app.get("/businesses/:id", (req, res) => {
    res.json(business.find((business) => req.params.id === String(business.id)))
});
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port  ${PORT}....`);
})