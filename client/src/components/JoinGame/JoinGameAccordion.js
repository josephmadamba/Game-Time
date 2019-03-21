// import React from 'react'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import ExpansionPanel from '@material-ui/core/ExpansionPanel'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
// import Typography from '@material-ui/core/Typography'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// const styles = theme => ({
//   root: {
//     width: '100%'
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   }
// })

// function SimpleExpansionPanel (props) {
//   const { classes } = props
//   return (
//     <React.Fragment>
//       <ExpansionPanel className={classes.root}>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading} />
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     </React.Fragment>
//   )
// }

// SimpleExpansionPanel.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(SimpleExpansionPanel)

import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import JoinGameCard from './JoinGameCard'
import JoinTable from './JoinTable'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class SimpleExpansionPanel extends React.Component {
  render () {
    const { title, date, time, description, joined } = this.props
    return (
      <div >
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{title}</Typography>
          </ExpansionPanelSummary >
          <ExpansionPanelDetails>
            <JoinTable title={title}
              time={time}
              date={date}
              description={description}
              joined={joined} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default SimpleExpansionPanel
