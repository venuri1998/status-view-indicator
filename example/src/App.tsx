/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { StatusViewIndicator } from 'status-view-indicator';

export default function App() {
  const win = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <StatusViewIndicator storyCount={5} viewCount={3} windowWidth={win.width}>
        <Image
          resizeMode="cover"
          source={{ uri: 'https://via.placeholder.com/200' }}
          style={{ width: '100%', height: '100%', borderRadius: 100 }}
        />
      </StatusViewIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
