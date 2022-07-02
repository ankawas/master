import { useEffect, useState } from "react";
import "./styles.css";
import stockApi from "../api";
import Graph from "./components/Graph";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const symbol = "AAPL,TSLA";
    stockApi.getSpark(symbol).then((res) => {
      console.log("res:", res);
      if (res?.length > 0) {
        console.log("Hello");
        console.log(res);
        const { timestamp, close } = res[0];
        const d = [timestamp, close];
        console.log("data", d);
        setData(d);
      }
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Graph data={data} />
    </div>
  );
}
