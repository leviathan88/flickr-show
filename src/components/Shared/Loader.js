import React from 'react'
import { View } from 'native-base'
import { ActivityIndicator } from 'react-native'

const Loader = () => (
  <View
    style={{
      paddingVertical: 20,
      borderTopWidth: 1,
      borderColor: "#CED0CE"
    }}
  >
    <ActivityIndicator animating size="large" />
  </View>
)

export default Loader
