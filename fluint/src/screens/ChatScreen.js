import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function ChatScreen() {
  // State to handle messages
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I assist you with learning languages today?' },
  ]);
  const [userInput, setUserInput] = useState('');

  // Function to send a message
  const handleSendMessage = () => {
    if (userInput.trim() === '') return; // Don't send empty messages

    // Add user message to the list
    setMessages([...messages, { id: String(messages.length + 1), text: userInput, sender: 'user' }]);

    // Clear input field
    setUserInput('');

    // Here, you could call your AI service to get a response and update the state
    setTimeout(() => {
      // Simulating AI response (you can replace this with an actual API call)
      setMessages(prevMessages => [
        ...prevMessages,
        { id: String(prevMessages.length + 1), text: `You said: "${userInput}". Great choice for practicing!`, sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={[styles.message, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          inverted // This makes the newest messages appear at the bottom
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={userInput}
            onChangeText={setUserInput}
          />
          <Button title="Send" onPress={handleSendMessage} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  message: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    maxWidth: '75%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  messageText: {
    fontSize: 16,
  },
});
