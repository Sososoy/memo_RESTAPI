const express = require('express');
const app = express();

// JSON 데이터 처리 미들웨어 사용하기
// postman에서 json화를 먼저 해야 알아들음!!!
app.use(express.json());

const routerNotes = require("./routes/notes");
app.use("/notes", routerNotes);
// 정의되지 않은 라우팅에 404 오류 처리하기
app.use((req, res, next) => {
    res.statusMessage(404);
    res.send({
        result: 'fail',
        error: `Page not found ${req.path}`
    });
});


// 오류 처리 미들웨어 구현하기
app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        result: 'fail',
        error: err.message,
    });
});


app.listen(8080, () => {
    console.log("server start");
});