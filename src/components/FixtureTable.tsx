import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { IonCard } from '@ionic/react';
import { Fixture } from '../database/types/generated';
import { makeStyles } from '@material-ui/core';

const sortFixturesByDate = (fixtures: Fixture[]): Fixture[] => {
  return [...fixtures].sort(
    (a, b) =>
      Number(new Date(a.Date as string)) - Number(new Date(b.Date as string))
  );
};

const useStyles = makeStyles((theme) => ({
  homeScore: {
    paddingRight: '2px',
    paddingLeft: '2px',
  },
  awayScore: {
    paddingRight: '2px',
    paddingLeft: '2px',
  },
  scoreDash: {
    paddingRight: '2px',
    paddingLeft: '2px',
  },
  rowBackground: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  ground: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: theme.palette.grey[500]
  }
}));

const FixturesTable: FC<{fixtures: Fixture[]}> = (props) => {
  const fixtures = props.fixtures;

  const classes = useStyles();

  return (
    <TableContainer>
      <Table stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell width="40%" align="right">
              Home
            </TableCell>
            <TableCell align="right" className={classes.homeScore}></TableCell>
            <TableCell align="center" className={classes.scoreDash}></TableCell>
            <TableCell className={classes.awayScore}></TableCell>
            <TableCell width="40%">Away</TableCell>
            <TableCell width="40%">Ground</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortFixturesByDate(fixtures).map((fixture) => {
            return (
              <TableRow key={fixture.Id}
              
              className={classes.rowBackground}>
                <TableCell align="right">{fixture.Date}</TableCell>
                <TableCell align="right">{fixture.HomeTeamName}</TableCell>
                <TableCell align="right" className={classes.homeScore}>
                  {fixture.HomeScore}
                </TableCell>
                <TableCell align="center" className={classes.scoreDash}>
                  -
                </TableCell>
                <TableCell className={classes.awayScore}>
                  {fixture.AwayScore}
                </TableCell>
                <TableCell>{fixture.AwayTeamName}</TableCell>
                <TableCell className={classes.ground}>{fixture.VenueName}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(FixturesTable);
