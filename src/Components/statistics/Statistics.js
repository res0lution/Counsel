import React from 'react';
import {Table} from 'react-bootstrap';
import './statistics.scss';

class Statistics extends React.Component {
  render() {
    return <section className="container-fluid statistics-block pb-5 pt-5">
      <div className="container pb-5 pt-5">
        <Table className="text-white statistics-table" borderless>
          <tbody>
            <tr className="text-uppercase text-center table-value-row">
              <td>7890</td>
              <td>1m</td>
              <td>1509</td>
              <td>5972</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="text-uppercase text-center table-name-row">
              <td>coffee cups</td>
              <td>subscribes</td>
              <td>customers</td>
              <td>purchases</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </section>
  }
}

export default Statistics;