import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import DataTable from 'react-md/lib/DataTables/DataTable'
import TableBody from 'react-md/lib/DataTables/TableBody'
import TableRow from 'react-md/lib/DataTables/TableRow'
import TableColumn from 'react-md/lib/DataTables/TableColumn'

export default class Times extends Component {

  constructor(props){
    super(props);


    this.resize = () => {
      drawChart({
        target: 'mon',
        type: 'Timeline',
        columns: [
          ['string', 'Employee'],
          ['string', 'Job'],
          ['date', 'Start'],
          ['date', 'End']
        ],
        rows: [
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 14, 30)],
          ['Il Buono', "Clear Waters", new Date(2017, 10, 23, 14, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Brutto', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Brutto', "Clear Waters", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Cattivo', "Federal Bank", new Date(2017, 10, 23, 8, 30), new Date(2017, 10, 23, 14, 0)]
        ]
      })
      drawChart({
        target: 'tue',
        type: 'Timeline',
        columns: [
          ['string', 'Employee'],
          ['string', 'Job'],
          ['date', 'Start'],
          ['date', 'End']
        ],
        rows: [
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 14, 30)],
          ['Il Buono', "Clear Waters", new Date(2017, 10, 23, 14, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Brutto', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Brutto', "Clear Waters", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Cattivo', "Federal Bank", new Date(2017, 10, 23, 8, 30), new Date(2017, 10, 23, 14, 0)]
        ]
      })
      drawChart({
        target: 'wed',
        type: 'Timeline',
        columns: [
          ['string', 'Employee'],
          ['string', 'Job'],
          ['date', 'Start'],
          ['date', 'End']
        ],
        rows: [
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 14, 30)],
          ['Il Buono', "Clear Waters", new Date(2017, 10, 23, 14, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Brutto', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Brutto', "Clear Waters", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Cattivo', "Federal Bank", new Date(2017, 10, 23, 8, 30), new Date(2017, 10, 23, 14, 0)]
        ]
      })
      drawChart({
        target: 'thu',
        type: 'Timeline',
        columns: [
          ['string', 'Employee'],
          ['string', 'Job'],
          ['date', 'Start'],
          ['date', 'End']
        ],
        rows: [
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 14, 30)],
          ['Il Buono', "Clear Waters", new Date(2017, 10, 23, 14, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Brutto', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Brutto', "Clear Waters", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Cattivo', "Federal Bank", new Date(2017, 10, 23, 8, 30), new Date(2017, 10, 23, 14, 0)]
        ]
      })
      drawChart({
        target: 'fri',
        type: 'Timeline',
        columns: [
          ['string', 'Employee'],
          ['string', 'Job'],
          ['date', 'Start'],
          ['date', 'End']
        ],
        rows: [
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 14, 30)],
          ['Il Buono', "Clear Waters", new Date(2017, 10, 23, 14, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Brutto', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Brutto', "Clear Waters", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Cattivo', "Federal Bank", new Date(2017, 10, 23, 8, 30), new Date(2017, 10, 23, 14, 0)]
        ]
      })
      drawChart({
        target: 'sat',
        type: 'Timeline',
        columns: [
          ['string', 'Employee'],
          ['string', 'Job'],
          ['date', 'Start'],
          ['date', 'End']
        ],
        rows: [
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 14, 30)],
          ['Il Buono', "Clear Waters", new Date(2017, 10, 23, 14, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Brutto', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Brutto', "Clear Waters", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Cattivo', "Federal Bank", new Date(2017, 10, 23, 8, 30), new Date(2017, 10, 23, 14, 0)]
        ]
      })
      drawChart({
        target: 'sun',
        type: 'Timeline',
        columns: [
          ['string', 'Employee'],
          ['string', 'Job'],
          ['date', 'Start'],
          ['date', 'End']
        ],
        rows: [
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Buono', "Mohave", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 14, 30)],
          ['Il Buono', "Clear Waters", new Date(2017, 10, 23, 14, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Brutto', "Mohave", new Date(2017, 10, 23, 8, 0), new Date(2017, 10, 23, 12, 30)],
          ['Il Brutto', "Clear Waters", new Date(2017, 10, 23, 13, 30), new Date(2017, 10, 23, 17, 0)],
          ['Il Cattivo', "Federal Bank", new Date(2017, 10, 23, 8, 30), new Date(2017, 10, 23, 14, 0)]
        ]
      })
    }
  }


  componentDidMount(){
    this.resize()
  }

  render() {
    window.onresize = this.resize;
    return (
      <div className="md-grid--40-16">
        <Card tableCard>
          <CardTitle title="Timeline" subtitle="week 39" />
          <DataTable baseId="time-table" plain>
            <TableBody>
              <TableRow>
                <TableColumn>MON</TableColumn>
                <TableColumn grow>
                  <div id="mon" className="timeline"></div>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>TUE</TableColumn>
                <TableColumn grow>
                  <div id="tue" className="timeline"></div>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>WED</TableColumn>
                <TableColumn grow>
                  <div id="wed" className="timeline"></div>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>THU</TableColumn>
                <TableColumn grow>
                  <div id="thu" className="timeline"></div>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>FRI</TableColumn>
                <TableColumn grow>
                  <div id="fri" className="timeline"></div>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>SAT</TableColumn>
                <TableColumn grow>
                  <div id="sat" className="timeline"></div>
                </TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>SUN</TableColumn>
                <TableColumn grow>
                  <div id="sun" className="timeline"></div>
                </TableColumn>
              </TableRow>
            </TableBody>
          </DataTable>
        </Card>
      </div>
    );
  }
}