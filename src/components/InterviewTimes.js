import React, { useState, useEffect } from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Paper
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  table: {
    width: 300,
    [theme.breakpoints.up('sm')]: {
      width: 580
    }
  },
  tableContainer: {
    maxHeight: 300,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxHeight: 450
    }
  }
}))

const InterviewTimes = ({ times, handleClick }) => {
  const classes = useStyles()

  const createTimeString = hour => {
    if (hour === 0) {
      return '12:00 AM'
    } else if (hour === 12) {
      return '12:00 PM'
    } else if (hour < 12) {
      return `${hour}:00 AM`
    }
    return `${hour - 12}:00 PM`
  }

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='center'>Date</TableCell>
            <TableCell align='center'>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {times.map(time => {
            return (
              <TableRow
                key={time.id}
                hover
                onClick={() => {
                  handleClick(time.index)
                }}
              >
                <TableCell>
                  <Checkbox checked={time.selected} />
                </TableCell>
                <TableCell align='center'>{time.date.toDateString()}</TableCell>
                <TableCell align='center'>
                  {createTimeString(time.date.getHours())}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InterviewTimes
