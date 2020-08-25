import React from "react";
import { SearchBar } from "react-native-elements";

export default class VocabScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
    
      <SearchBar
        placeholder="ค้นหาคำศัพท์"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}