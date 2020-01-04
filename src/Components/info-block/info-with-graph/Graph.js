import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { connect } from 'react-redux';
import { fetchDataForGraph } from '../../../actions/graph.js';
import propTypes from 'prop-types';

class Graph extends React.Component {

  componentDidMount() {
    const {dispatch, data} = this.props;
    dispatch(fetchDataForGraph(data));
  };

  render() {
    return <div>
    <LineChart
        width={500}
        height={500}
        data={this.props.data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="profit" stroke="#002e5b" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="investment" stroke="#fde428" />
    </LineChart>
    </div>
  };
};

const mapStateToProps = (state) => {
  const {dataForGraph} = state;
  const {dataGraph} = dataForGraph;
  const {isFetching, items: data} = dataGraph || {isFetching: true, items: []};
  return {
    data,
    isFetching
  };
};

Graph.propTypes = {
  data: propTypes.array.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired
};

Graph.defaultProps = {
  data: [],
  isFetching: true
};

export default connect(mapStateToProps)(Graph);