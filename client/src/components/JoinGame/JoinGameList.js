import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Accordion from './JoinGameAccordion'

class SimpleList extends React.Component {
  render() {
    const { title, time, date, description, joined } = this.props;
    console.log(title)
  return (
    <div >
      <List component="nav">
        <ListItem>
          <Accordion title={title}
                     time={time}
                     date={date}
                     description={description}
                     joined={joined} />
        </ListItem>
      </List>
    </div>
  );
}}



export default SimpleList;