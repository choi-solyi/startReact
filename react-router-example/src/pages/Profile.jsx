export default function Profile(props) {
  console.log("Props: ", props);
  const id = props.match.params.id;
  console.log("id: ", id); // string 타입

  return (
    <div>
      <h1>Profile 페이지입니다.</h1>
      {id && <p>ID는 {id} 입니다.</p>}
    </div>
  );
}
