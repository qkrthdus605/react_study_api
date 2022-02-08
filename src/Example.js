import React from "react";

function Example() {
  const onClick = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
  return (
    <div>
      <h2>fetch를 사용해서 API 불러오기</h2>
      <div>
        <button onClick={onClick}>API 불러오기</button>
      </div>
    </div>
  );
}

export default Example;
