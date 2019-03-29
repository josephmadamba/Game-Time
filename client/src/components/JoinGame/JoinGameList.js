import React from 'react'
import SimpleExpansionPanel from './JoinGameAccordion'

class SimpleList extends React.Component {
  render () {
    const { myGames, title, time, date, description, user, index, gameid, button, addMyGames } = this.props
    return (
      <div >
        <SimpleExpansionPanel
          title={title}
          time={time}
          date={date}
          description={description}
          index={index}
          user={user}
          gameid={gameid}
          button={button}
          addMyGames={addMyGames}
          myGames={myGames} />
      </div>
    )
  }
}

export default SimpleList
