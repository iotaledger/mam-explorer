import React, { Component } from 'react';
import axios from 'axios';
import {
  Autocomplete,
  FocusContainer,
  TextField,
  SelectField,
  Button,
  CardActions,
  FontIcon,
} from 'react-md';
import 'assets/scss/form.scss';
import knownNodes from '../knownNodes.json';

const MODE = ['public', 'restricted', 'private'];

const nodesURL = 'https://iotanode.host/node_table.json';

class Form extends Component {
  state = {
    providerError: false,
    rootError: false,
    showSideKeyInpit: false,
    filteredData: [],
    provider: [...knownNodes],
  };

  componentDidMount = () => {
    axios.get(nodesURL).then(result => {
      if (result && result.data && result.data.length > 0) {
        const data = result.data.filter(({ online }) => online === '1').map(({ host }) => host);
        this.setState({
          provider: [...this.state.provider, ...data],
        });
      }
    });
  };

  changeMode = mode => {
    this.setState({ showSideKeyInpit: mode === 'restricted' });
  };

  /**
   * This custom filter will take the current value and return all matches that start
   * with the value ignoring case and then bold the letters in the search results that
   * match.
   */
  filter = value => {
    const regex = new RegExp(value, 'i');
    const length = value.length;
    const filteredData = this.state.provider.reduce((matches, state) => {
      if (regex.test(state)) {
        matches.push({
          label: [
            <span key="bold" className="md-font-bold">
              {state.substring(0, length)}
            </span>,
            state.substring(length),
          ],
          value: state,
        });
      }

      return matches;
    }, []);

    this.setState({ filteredData });
  };

  handleAutocomplete = value => {
    this.setState({ providerValue: value });
    this.filter(value);
  };

  handleChange = value => {
    this.setState({ providerValue: value });
    this.filter(value);
  };

  submit = event => {
    event.preventDefault();
    const formError = this.validate();
    if (!formError) {
      this.props.onSubmit({
        provider: this.provider.value,
        root: this.root.value,
        mode: this.mode.value || 'public',
        key: this.sideKey ? this.sideKey.value : null,
      });
    }
  };

  validate = () => {
    this.setState({
      providerError: !this.provider.value,
      rootError: !this.root.value,
    });

    return !this.provider.value || !this.root.value;
  };

  render() {
    const { filteredData, providerError, rootError, showSideKeyInpit, providerValue } = this.state;
    const { showLoader } = this.props;

    const selectFieldProps = {
      dropdownIcon: <FontIcon>expand_more</FontIcon>,
      position: SelectField.Positions.BELOW,
      className: 'md-cell',
      errorText: 'This field is required.',
    };
    return (
      <div className="formWrapper">
        <FocusContainer
          focusOnMount
          containFocus
          component="form"
          className="md-grid"
          onSubmit={this.submit}
          aria-labelledby="iota-mam-explorer"
        >
          <TextField
            ref={root => (this.root = root)}
            id="root"
            label="Root"
            required
            type="text"
            error={rootError}
            errorText="This field is required."
            onChange={this.validate}
          />
          <Autocomplete
            ref={provider => (this.provider = provider)}
            id="provider"
            className="toolbar-search"
            type="search"
            data={filteredData}
            label="Provider"
            placeholder="Provider"
            filter={null}
            value={providerValue}
            onChange={this.handleChange}
            onAutocomplete={this.handleAutocomplete}
            dataLabel="label"
            dataValue="value"
            listClassName="toolbar-search__list"
          />
          <SelectField
            ref={mode => (this.mode = mode)}
            id="mode"
            label="Mode"
            menuItems={MODE}
            onChange={this.changeMode}
            {...selectFieldProps}
          />
          {showSideKeyInpit ? (
            <TextField
              ref={sideKey => (this.sideKey = sideKey)}
              id="sideKey"
              label="Encryption Key"
              type="text"
            />
          ) : null}
        </FocusContainer>
        <div>
          <CardActions className={`cta md-cell md-cell--12 ${showLoader ? 'hidden' : ''}`}>
            <Button secondary raised disabled={providerError || rootError} onClick={this.submit}>
              Fetch
            </Button>
          </CardActions>
        </div>
      </div>
    );
  }
}

export default Form;
