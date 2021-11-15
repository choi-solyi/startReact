import { useParams } from "react-router";

export default function Profile() {
  // console.log("Props: ", props);
  // const id = props.match.params.id;
  // console.log("id: ", id); // string 타입

  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>Profile 페이지입니다.</h1>
      {id && <p>ID는 {id} 입니다.</p>}
    </div>
  );
}
