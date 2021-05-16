import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

export default class Loader extends React.Component<any>{
    render() {
      return (
        <Layout style={styles.loading}>
          <ActivityIndicator size="large" color="#ff0000" />
        </Layout>
      )
    }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingTop: 50,
  },
 });