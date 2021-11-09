import React, { Component } from 'react';
import { ExpansionPanel, Switch } from 'react-md';
import MessageContent from './MessageContent';

class List extends Component {
  state = {
    expanded: false,
    expandedPanels: []
  };

  onExpandToggle = (toggleOpen, key) => {
    const { expandedPanels } = this.state;
    if (toggleOpen) {
      this.setState({ expandedPanels: [...expandedPanels, key] }, () => this.setSwitchState());
    } else {
      const index = expandedPanels.indexOf(key);
      if (index > -1) {
        expandedPanels.splice(index, 1);
        this.setState({ expandedPanels: [...expandedPanels] }, () => this.setSwitchState());
      }
    }
  };

  setSwitchState = () => {
    const { expandedPanels } = this.state;
    const { messages } = this.props;
    if (expandedPanels.length === messages.length) {
      this.setState({ expanded: true });
    } else if (expandedPanels.length === 0) {
      this.setState({ expanded: false });
    }
  };

  toggleExpandedState = (event) => {
    const expanded = event.target.checked;
    console.log(this.state);
    if (!expanded) {
      this.setState({ expanded, expandedPanels: [] });
    } else {
      this.setState({
        expanded,
        expandedPanels: Array.from(new Array(this.props.messages.length), (x, i) => i)
      });
    }
  };

  render() {
    const { messages } = this.props;
    const { expanded } = this.state;
    return (
      <div className="panel">
        <Switch
          id="expand-all"
          type="switch"
          label="Expand all"
          name="expand-all"
          checked={expanded}
          onChange={this.toggleExpandedState}
        />
        {messages.map((message, index) => (
          <ExpansionPanel
            id={index.toString()}
            key={index}
            header={index}
            footer={null}
            expanded={this.state.expandedPanels.includes(index)}
            onExpandClick={() => this.onExpandToggle(!this.state.expandedPanels.includes(index), index)}
          >
            <MessageContent message={message} />
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default List;
