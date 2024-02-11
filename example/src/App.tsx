import * as React from 'react';

import { StyleSheet, View, Dimensions } from 'react-native';
import { StatusViewIndicator } from 'status-view-indicator';

export default function App() {
  const win = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <StatusViewIndicator
        storyCount={5}
        viewCount={3}
        imgUrl="https://via.placeholder.com/200"
        windowWidth={win.width}
      />
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
