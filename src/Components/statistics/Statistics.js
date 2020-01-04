import React from 'react';
import {Table} from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchStatsForStatistic } from '../../actions/statistic.js';
import propTypes from 'prop-types';
import './statistics.scss';

class Statistics extends React.Component {
  constructor(props) {
    super(props)
    this.t = this.props.t;
  };

  componentDidMount() {
    const {dispatch, stats} = this.props;
    dispatch(fetchStatsForStatistic(stats));
  };

  componentDidUpdate(prevProps) {
    if (this.props.dataStats !== prevProps.dataStats) {
      const { dispatch, stats } = this.props;
      dispatch(fetchStatsForStatistic(stats));
    };
  };

  render() {
    const {stats, isFetching} = this.props;
    
    return <section className="container-fluid statistics-block pb-5 pt-5">
      <div className="container pb-5 pt-5">
        <Zoom>
          {!isFetching &&
          (<Table className="text-white statistics-table" borderless>
            <tbody>
              <tr className="text-uppercase text-center table-value-row">
                {stats.map((item, index)=> <td key={index}>{item[1]}</td>)}
              </tr>
            </tbody>
            <tfoot>
              <tr className="text-uppercase text-center table-name-row">
                {stats.map((item, index)=> <td key={index}>{this.t(item[0])}</td>)}
              </tr>
            </tfoot>
          </Table>)}
        </Zoom>
      </div>
    </section>
  };
};

Statistics.propTypes = {
  t: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired,
  stats: propTypes.array.isRequired
};

Statistics.defaultProps = {
  isFetching: true,
};

const mapStateToProps = (state) => {
  const {statsForStatistic} = state;
  const {dataStats} = statsForStatistic;
  const {isFetching, items: stats} = dataStats|| {isFetching: true, items: []};
  return {
    stats,
    isFetching
  };
};

export default connect(mapStateToProps)(withTranslation()(Statistics));