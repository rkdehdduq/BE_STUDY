// 동물 소리 API 서버 만들기
// GET/sound/:name
// name 에 따라서 다른 울음소리

const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

//cors 이슈 해결
app.use(cors())

//root
app.get('/',  (req, res)=> {
    res.send('Hello World')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params  // {키값} 이렇게많이 함 

    if(name == "dog") { 
        res.json({'sound':'멍멍'})
    }
    else if (name == "cat") { 
        res.json({'sound':'야옹'})
    }
    else if (name == "pig") { 
        res.json({'sound':'꿀꿀'})
    }
    else { 
        res.json({'sound':'알수없음'})
    }
}) 

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})