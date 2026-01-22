import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import styles from './styles';


const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={30} />
        <Text style={{ marginTop: 10 }}>Aguarde um momento...</Text>
    </View>
  );
}

export default Loading;