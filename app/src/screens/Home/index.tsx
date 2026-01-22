import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import { MessageCategory, MessageClassifyRes } from "../../types/response";
import Message from "../../components/Message";
import api from "../../services/api";

const Home: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageClassifyRes[]>([]);

  const classifyMessage = async () => {
    if (!message.trim()) {
      Alert.alert("Mensagem inválida", "Por favor, digite uma mensagem para continuarmos");
      return;
    }

    
    try {
      const res = await api.post("/classify", {
        text: message,
        strategy: "rules",
      });
      console.log(res.data)

      if (res.status === 200) {
        setMessages((old) => [...old, {...res.data, text: message}]);
        setMessage("");
      }
    } catch (error) {
      console.error("Erro ao classificar mensagem:", error);
      Alert.alert("Erro ao classificar mensagem. Tente novamente.");
    }
  } 

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header screenName="Home" />
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <View style={styles.presentation_container}>
            <Text style={styles.title}>Classifique suas mensagens</Text>
            <Text style={styles.subtitle}>
              Escreva sua mensagem no input abaixo e nós classificaremos ela
              para você
            </Text>
          </View>
          <ScrollView contentContainerStyle={styles.message_container}>
            <Text style={{ margin: 15, fontWeight: 700 }}>Mensagens Classificadas</Text>
            {messages.map((msg, index) => {
              return <Message message={msg} key={index} />;
            })}
          </ScrollView>
          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              onChangeText={setMessage}
              value={message}
            />
            <TouchableOpacity style={styles.send_button} onPress={() => classifyMessage()}>
              <Feather name="send" color={"#fff"} size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;
