import React from 'react'
import SimpleExpansionPanel from './JoinGameAccordion'

class SimpleList extends React.Component {
  render () {
    const { myGames, title, time, date, description, user, index, gameid, button, addMyGames, city, state, zip, address } = this.props
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
          myGames={myGames}
          city={city}
          state={state}
          zip={zip}
          address={address} />
      </div>
    )
  }
}

export default SimpleList
