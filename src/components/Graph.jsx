import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";

function Graph(props) {
  return (
    <XYPlot width={300} height={300} getX={(d) => d[0]} getY={(d) => d[1]}>
      <HorizontalGridLines />
      <LineSeries data={props?.data} />
      <XAxis />
      <YAxis />
    </XYPlot>
  );
}

module.exports = Graph;
