import React, { useState } from "react";
import axios from "axios";

//axios 사용 예제

function Example2() {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios.get("https://randomuser.me/api/?results=2").then((response) => {
      setData(response.data);
    });
  };

  return (
    <div>
      <h2>axios를 사용해서 API 불러오기</h2>
      <div>
        <button onClick={onClick}>API 불러오기</button>
      </div>
      {data && (
        <textarea rows={20} value={JSON.stringify(data)} readOnly={true} />
      )}
    </div>
  );
}

export default Example2;
