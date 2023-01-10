//imports necessários para a realização das funções
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {calcular} from './functions';

export default function App() {
  const [texto1, setTexto1] = useState('');
  const [texto2, setTexto2] = useState('');
  const [operacao, setOperacao] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto2}>Calculadora</Text>

      <View style={styles.linha}>
        <TouchableOpacity
          style={[styles.botao, operacao === '+' ? styles.selecionar : false]}
          onPress={() => setOperacao('+')}>
          <Text style={styles.texto}>ADIÇÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, operacao === '-' ? styles.selecionar : false]}
          onPress={() => setOperacao('-')}>
          <Text style={styles.texto}>SUBTRAÇÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, operacao === '*' ? styles.selecionar : false]}
          onPress={() => setOperacao('*')}>
          <Text style={styles.texto}>MULTIPLICAÇÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, operacao === '/' ? styles.selecionar : false]}
          onPress={() => setOperacao('/')}>
          <Text style={styles.texto}>DIVISÃO</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        value={texto1}
        onChangeText={text => {
          setTexto1(text);
        }}
        style={styles.input}
        keyboardType={'number-pad'}
      />

      <TextInput
        value={texto2}
        onChangeText={text => {
          setTexto2(text);
        }}
        style={styles.input}
        keyboardType={'number-pad'}
      />

      <TouchableOpacity
        style={styles.botao2}
        onPress={() => calcular(texto1, texto2, operacao, setResultado)}>
        <Text style={styles.texto3}>CALCULAR</Text>
      </TouchableOpacity>

      <Text style={styles.input}> {resultado} </Text>
    </View>
  );
}
