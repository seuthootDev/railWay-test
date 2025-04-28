const express = require('express');
const app = express();

// 기본 루트 경로에 대한 처리
app.get('/', (req, res) => {
    console.log('루트 경로에 GET 요청을 받았습니다.');
    res.send('사용법: /add?a=10&b=20 형식으로 요청을 보내세요.');
});

// GET 요청을 받아서 두 인자 더하는 엔드포인트
app.get('/add', (req, res) => {
    console.log('받은 요청:', req.query);  // 요청된 쿼리 파라미터 로그

    const { a, b } = req.query;  // 쿼리 파라미터에서 a, b 값 받아오기

    // a와 b가 숫자인지 확인
    if (isNaN(a) || isNaN(b)) {
        console.log('잘못된 입력, a와 b는 숫자여야 합니다.');
        return res.status(400).json({ error: 'a와 b는 숫자여야 합니다.' });
    }

    // a와 b를 더한 결과
    const result = Number(a) + Number(b);
    console.log(`계산 결과: ${a} + ${b} = ${result}`);
    res.json({ result });  // 결과를 JSON으로 응답
});

// 서버 포트 설정
const PORT = process.env.PORT || 5000;  // Railway에서는 PORT 환경 변수를 사용
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

