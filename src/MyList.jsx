import React, { Component } from "react"
import "./MyList.css"
import ListItem from "./ListItem"

class MyList extends Component {
  render() {
    const listItems = this.props.toDos.map((todo, i) => {
      return (
        <ListItem 
          key={"listitem" + i}
          task={todo}
        />
      )
    })
    return (
      <div>
        <h1 className="white-text">Things I should stop procrastinating:</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default MyList