const EXPRESS = require('express');
const PORT = process.env.PORT || 3001;
const APP = EXPRESS();

// middleware
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());

APP.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
});

APP.use((req, res) => {
    res.status(404).end();
})


// listen on port
APP.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



