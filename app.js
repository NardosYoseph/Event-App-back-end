const express = require('express');
const app = express();
const userRoutes = require('./routes/user_route');
const eventRoutes = require('./routes/event_route');
app.use(express.json()); // Parse JSON request bodies

app.use('/public', express.static(__dirname + "/public"))
// Mount user routes
app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
