const express = require('express');
const app = express();

// GET 요청을 받아서 두 인자 더하는 엔드포인트
app.get('/add', (req, res) => {
    const { a, b } = req.query;  // 쿼리 파라미터에서 a, b 값 받아오기

    // a와 b가 숫자인지 확인
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'a와 b는 숫자여야 합니다.' });
    }

    // a와 b를 더한 결과
    const result = Number(a) + Number(b);
    res.json({ result });  // 결과를 JSON으로 응답
});

// 서버 포트 설정
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

