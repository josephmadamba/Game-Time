import React from 'react'
import Accordion from './JoinGameAccordion'

class SimpleList extends React.Component {
  render () {
    const { title, time, date, description, joined } = this.props
    console.log(title)
    return (
      <div >
        <Accordion title={title}
          time={time}
          date={date}
          description={description}
          joined={joined} />
      </div>
    )
  }
}

export default SimpleList
