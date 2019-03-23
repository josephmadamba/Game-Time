import React from 'react'
import SimpleExpansionPanel from './JoinGameAccordion'

class SimpleList extends React.Component {
  render () {
    const { title, time, date, description, joined } = this.props
    return (
      <div >
        <SimpleExpansionPanel
          title={title}
          time={time}
          date={date}
          description={description}
          joined={joined} />
      </div>
    )
  }
}

export default SimpleList
