import React, { useState } from "react";

const App: React.FC = () => {
  const request = require("request");
  const [data, setData] = useState<Array<string>>([]);

  function hoge() {
    request.get("https://www.githubstatus.com/", { json: true }, function(err: Error, res: Response, body: any) {
      if (err) {
        console.log("Error: " + err.message);
        return;
      }
      let minimalData: string[] = [];
      body.components.map((element: any) => {
        minimalData.push(`${element.name}:${element.status}`);
      });
      setData(minimalData);
    });
  }
  return (
    <>
      <button
        onClick={() => {
          hoge();
        }}
      >
        ステータスを取得する
      </button>
      {data.map((data, index) => (
        <p>{data}</p>
      ))}
    </>
  );
};

export default App;
