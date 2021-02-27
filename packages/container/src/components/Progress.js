import React from 'react'
import {
  makeStyles,
  createStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

// Give the progress bar 100% width a bit of margin
const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  })
})

export default function Progress() {
  const classes = useStyles()

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  )
}
