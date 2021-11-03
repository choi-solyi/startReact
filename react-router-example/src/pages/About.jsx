import queryString from "query-string";

export default function About(props) {
  console.log(props);
  const searchParams = props.location.search;
  console.log("searchParams: ", searchParams);
  const obj = new URLSearchParams(searchParams);
  console.log("obj: ", obj.get("name"));
  // 1번째 단점 : 메서드를 다 기억해서 사용해야한다.
  // 2번째 단점 : 브라우저 내장 객체이므로 브라우저에 따라 지원이 안될 수있음 (ex: IE)

  const query = queryString.parse(searchParams);
  console.log(query); // -> {name: 'solyi'}

  return (
    <div>
      <h1>About 페이지입니다.</h1>
      {query.name && <p>이름은 {query.name}입니다.</p>}
    </div>
  );
}
