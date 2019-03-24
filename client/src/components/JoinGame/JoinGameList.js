import React from 'react'
import SimpleExpansionPanel from './JoinGameAccordion'

class SimpleList extends React.Component {
  render () {
    const { title, time, date, description, user, index, id } = this.props
    return (
      <div >
        <SimpleExpansionPanel
          title={title}
          time={time}
          date={date}
          description={description}
          index={index}
          user={user}
          id={id} />
      </div>
    )
  }
}

export default SimpleList
