import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default function Repository(props) {
  const { navigation } = props;
  const repo = navigation.getParam('repo');

  return <WebView source={{ uri: repo.html_url }} style={{ flex: 1 }} />;
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repo').login,
});

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
