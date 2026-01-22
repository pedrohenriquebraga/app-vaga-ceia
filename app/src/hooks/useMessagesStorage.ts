import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MessageClassifyRes } from '../types/response';

const STORAGE_KEY = '@messages_classified';

export const useMessagesStorage = () => {
  const [messages, setMessages] = useState<MessageClassifyRes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setMessages(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveMessages = async (newMessages: MessageClassifyRes[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
      setMessages(newMessages);
    } catch (error) {
      console.error('Erro ao salvar mensagens:', error);
    }
  };

  const addMessage = async (message: MessageClassifyRes) => {
    const updated = [...messages, message];
    await saveMessages(updated);
  };

  const clearMessages = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setMessages([]);
    } catch (error) {
      console.error('Erro ao limpar mensagens:', error);
    }
  };

  return {
    messages,
    loading,
    addMessage,
    clearMessages,
  };
};
