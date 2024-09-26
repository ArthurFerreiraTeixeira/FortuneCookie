import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Vibration } from 'react-native';

const App = () => {
  const [cookieBroken, setCookieBroken] = useState(false);
  const [fortune, setFortune] = useState('');
  const [showButton, setShowButton] = useState(true);

  const fortunes = [
    'Acredite nos seus sonhos e eles se tornarão realidade.',
    'Hoje é um bom dia para começar algo novo.',
    'Grandes coisas estão por vir em sua vida.',
    'A persistência é o caminho para o sucesso.',
    'Você está mais perto do que imagina.',
    'O universo tem grandes planos para você.'
  ];

  const breakCookie = () => {
    Vibration.vibrate(200); 
    setCookieBroken(true);
    setShowButton(false);

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setTimeout(() => setFortune(randomFortune), 1000); 
  };

  const resetCookie = () => {
    setCookieBroken(false);
    setFortune('');
    setShowButton(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fortune Cookie</Text>

      {}
      <Image
        source={
          cookieBroken
            ? require('./assets/quebrado.png')  
            : require('./assets/cookie.png') 
        }
        style={cookieBroken ? styles.cookieImageBroken : styles.cookieImageClosed}
      />

      {/* Botão de ação */}
      {showButton ? (
        <TouchableOpacity style={styles.button} onPress={breakCookie}>
          <Text style={styles.buttonText}>Quebrar Biscoito</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.fortuneContainer}>
          <Text style={styles.fortuneText}>{fortune}</Text>
          <TouchableOpacity style={styles.button} onPress={resetCookie}>
            <Text style={styles.buttonText}>Novo Biscoito</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  cookieImageClosed: {
    width: 160,
    height: 160,
    marginBottom: 20,
    opacity: 0.9,
  },
  cookieImageBroken: {
    width: 160,
    height: 160,
    marginBottom: 20,
    transform: [{ rotate: '10deg' }],
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
  fortuneContainer: {
    alignItems: 'center',
  },
  fortuneText: {
    fontSize: 20,
    color: '#555',
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default App;

