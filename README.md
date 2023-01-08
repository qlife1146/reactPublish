## 개요

React JS 공부용 리포지터리.

## 알게된 것

-   모듈식으로 할 수 있는 것이 보기에 좋았다.
-   삼항연산자와 useState를 활용한 DOM 제어가 인상 깊었다.
    -   JS에서 사용하던 몇 가지는 react에서 사용할 수 없다.
        -   class => className
        -   for => htmlFor
-   function을 계속 호출하는 것에 대해 생각을 해본 적이 없다. 성능이 느려질만한 것을 하지 않았기 때문이다. 이번에 생각을 하게 됐고, 방법을 조금이나마 배웠다.
    -   useEffect를 이용하면 전체 function들이 아닌 원하는 function을 사용할 때만 실행하게 할 수 있다. [] 안에 컴포넌트를 넣으면 그 컴포넌트에 반응이 있을 때만 연결된 function이 작동한다. 빈칸으로 두면 딱 한번 작동한다.
    -   cleanup: useEffect는 기본적으로 켜질 때 작동을 하지만, return을 추가하면 꺼질 때 작동을 하게도 할 수 있다(예: 분석 결과 API).
    ```
        useEffect(()=> {
            console.log("created");
            return () => console.log("destroyed");
        }, []);
    ```
-   비동기 처리: 특정 로직의 실행이 끝날 때까지 기다리지 않고 나머지 코드를 먼저 실행하는 것. 고의로 지연을 걸지 않으면 서버 응답이 오기도 전에 코드를 끝내 정의되지 않은 값을 리턴할 수도 있다.
-   [async & await][async_link]: JS의 비동기 처리 패턴 중 가장 최근에 나온 문법. 기존의 콜백 함수와 프로미스의 단점을 보완하고 가독성 높은 코드를 작성할 수 있게 해준다.
    -   async는 함수 앞에, await는 비동기 처리 메서드 앞에 작성하는데 비동기 처리 메서드가 꼭 프로미스 객체를 변환해야 의도한 대로 동작한다. 일반적으로 비동기 처리 코드는 프로미스<sup>[1](#footnote1)</sup>를 반환하는 API 호출 함수이다.
-   prop: API를 받은 페이지를 분리할 때 리스트를 map으로 부르는 것은 같으나, 분리한 페이지에서 매개변수를 작성 후에 그 페이지를 map 기능 안에서 가져온다.
-   react-router-dom: 유저의 현재 url을 기반으로 렌더링을 해 불필요한 컴포넌트의 렌더링을 막는다. ~~(er > es > t)~~
-   그중 Link는 새로고침 없이 다른 페이지로 이동시켜주는 컴포넌트.
    ```<Router>
            <Routes>
                {/* Route(url)를 찾는 역할. */}
                {/* Route를 찾으면 컴포넌트를 렌더링함. */}
                <Route
                    //Switch의 지원 종료로 인해 대체재로 변경.
                    //유저가 `url/`에 있으면 element 컴포넌트를 렌더링
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/movie"
                    element={<Detail />}
                />
            </Routes>
        </Router>
    ```

---

## 추가한 내용

## 받아온 API 데이터에 css로 직접 디자인하여 나름 볼만하게 만들었다고 생각한다.

## 참조

<a name="footnote1">[1]</a>: 비동기 작업의 작업 상태(성공, 실패 등) 정보를 갖는 객체.

<img src="https://joshua1988.github.io/images/posts/web/javascript/promise.svg" />[참조][promise_link]

[async_link]: https://joshua1988.github.io/web-development/javascript/js-async-await/
[promise_link]: https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
