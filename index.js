//express - Express — это простейшая, гибкая и оптимизированная платформа Node.js, упрощающая разработку веб-приложения, которое может обрабатывать различные типы запросов, например GET, PUT, POST и delete. Express поставляется с генератором приложений, который автоматически создает файловую архитектуру для приложения.
const express = require('express')
const userRouter = require('./routes/userRoutes.js') 
const postRouter = require('./routes/postRoutes.js') 
const path = require('path') //??????/

const PORT = 8080;

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})



app.use(express.json());
app.use('/api', urlencodedParser,  userRouter);
app.use('/api',urlencodedParser, postRouter);
    
app.listen(PORT, () => console.log(`server started on port ${PORT}`));