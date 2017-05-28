import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import { Modal } from 'react-bootstrap'

class App extends Component {
  state = { value: '' }
  render() {
    return (
      <Modal show>
        <Autocomplete
          value={this.state.value}
          shouldItemRender={(item, value) => item.toLowerCase().startsWith(value.toLowerCase())}
          items={['ABC', 'DEF', 'GHI']}
          onChange={(e, value) => this.setState({value})}
          onSelect={(value) => {this.setState({value})}}
          renderItem={(item, isHighlighted) => (
            <div style={{ background: isHighlighted ? 'gray' : 'transparent' }}>
              {item}
            </div>
          )}
          getItemValue={String}
        />
      </Modal>
    )
  }
}

export default App
