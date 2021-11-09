import React, { Component } from 'react';
import { AutoComplete, FocusContainer, TextField, Select, Button, CardActions, FormMessage, FormThemeProvider } from 'react-md';
import knownNodes from '../knownNodes.json';

const MODE = ['public', 'restricted', 'private'];

class Form extends Component {
  state = {
    providerError: false,
    rootError: false,
    showSideKeyInput: false,
    provider: [...knownNodes],
    providerValue: knownNodes[0],
    modeValue: 'public',
    rootValue: ''
  };

  handleModeChange = (mode) => {
    this.setState({ showSideKeyInput: mode === 'restricted', modeValue: mode });
  };

  handleProviderChange = (value) => {
    this.setState({ providerValue: value, providerError: false });
  };

  handleRootChange = (event) => {
    this.setState({ rootValue: event.target.value });
  };

  submit = (event) => {
    event.preventDefault();
    const formError = this.validate();
    if (!formError) {
      this.props.onSubmit({
        provider: this.state.providerValue,
        root: this.state.rootValue,
        mode: this.state.modeValue || 'public',
        key: this.sideKey ? this.sideKey.value : null
      });
    }
  };

  validate = () => {
    this.setState({
      providerError: !this.state.providerValue,
      rootError: !this.state.rootValue
    });

    return !this.state.providerValue || !this.state.rootValue;
  };

  render() {
    const { providerError, rootError, showSideKeyInput, provider, providerValue, modeValue, rootValue } = this.state;
    const { showLoader } = this.props;

    return (
      <FormThemeProvider theme="underline">
        <div className="formWrapper">
          <FocusContainer component="form" onSubmit={this.submit} aria-labelledby="iota-mam-explorer">
            <TextField id="root" label="Root" required type="text" value={rootValue} onChange={this.handleRootChange} />
            {rootError && (
              <FormMessage id="root" error={rootError}>
                This field is required.
              </FormMessage>
            )}
            <AutoComplete
              id="provider"
              className="toolbar-search"
              type="search"
              data={provider}
              label="Provider"
              value={providerValue}
              placeholder="Provider"
              filter={'case-insensitive'}
              onAutoComplete={(event) => this.handleProviderChange(event.value)}
              onChange={(event) => this.handleProviderChange(event.target.value)}
            />
            {providerError && (
              <FormMessage id="provider" error={providerError}>
                This field is required.
              </FormMessage>
            )}
            <Select id="mode" label="Mode" options={MODE} value={modeValue} onChange={this.handleModeChange} />
            {showSideKeyInput ? (
              <TextField ref={(sideKey) => (this.sideKey = sideKey)} id="sideKey" label="Encryption Key" type="text" />
            ) : null}
          </FocusContainer>
          <div>
            <CardActions className={`cta rmd-cell rmd-cell--12 ${showLoader ? 'hidden' : ''}`}>
              <Button
                theme="secondary"
                themeType="contained"
                disabled={providerError || rootError}
                onClick={this.submit}
              >
                Fetch
              </Button>
            </CardActions>
          </div>
        </div>
      </FormThemeProvider>
    );
  }
}

export default Form;
