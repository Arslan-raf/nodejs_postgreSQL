//express - Express — это простейшая, гибкая и оптимизированная платформа Node.js, упрощающая разработку веб-приложения, которое может обрабатывать различные типы запросов, например GET, PUT, POST и delete. Express поставляется с генератором приложений, который автоматически создает файловую архитектуру для приложения.
const express = require('express')
const userRouter = require('./routes/userRoutes.js') 
const postRouter = require('./routes/postRoutes.js') 

const PORT = 8080;

const app = express();


app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);
    
app.listen(PORT, () => console.log(`server started on port ${PORT}`));