import React, { Component } from "react"
import "./App.css"
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
import { Player } from "./containers/Player"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
        <section id="player">
          <Player />
        </section>
      </div>
    )
  }
}

export default App