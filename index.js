const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json({
        'test': "Sample test here",
        list: [
            'wgat', 'the', 'hell', 'is', 'this'
        ]
    })
});
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port  ${PORT}....`);
})