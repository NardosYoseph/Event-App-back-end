const express = require('express');
const app = express();
const userRoutes = require('./routes/user_route');

app.use(express.json()); // Parse JSON request bodies

// Mount user routes
app.use('/api/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
