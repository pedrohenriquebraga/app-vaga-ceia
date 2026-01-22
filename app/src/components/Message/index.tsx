import React from 'react';
import { View, Text } from 'react-native';
import { MessageClassifyRes } from '../../types/response';
import styles from './styles';

interface Props {
  message: MessageClassifyRes
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <View style={styles.message_container}>
        <Text style={styles.message_text} numberOfLines={2} ellipsizeMode="tail">{message.text}</Text>
        <Text style={styles.category}>{message.category}</Text>
        <Text style={styles.confidence}>{message.confidence * 100}%</Text>
    </View>
  );
}

export default Message;