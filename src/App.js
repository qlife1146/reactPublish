import "./css/style.css";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import API from "./ApiReference";
import Detail from "./routes/Detail";

//https://yts.mx/api
//https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year

function App() {
    return (
        <Router>
            <Routes>
                {/* Route(u rl)를 찾는 역할. */}
                {/* Route를 찾으면 컴포넌트를 렌더링함. */}
                <Route
                    //Switch의 지원 종료로 인해 대체재로 변경.
                    //유저가 `url/`에 있으면 element 컴포넌트를 렌더링
                    path={process.env.PUBLIC_URL + "/"}
                    element={<Home />}
                />
                <Route
                    path="/movie/:id"
                    //:id로 동적 URL 할당. 콜론은 필수.
                    //근데 여기 안하고 MoviePage에서만 해줘도 되던데
                    //아니네 useParam 쓰려면 필요하네 없으면 element로 보내주질 않는다.
                    element={<Detail />}
                />
            </Routes>
        </Router>
    );
}

export default App;
