import {StyleSheet} from 'react-native';

// criando o style e importando, a variavel é uma constante ñ muda
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },

  // estilo dos botões com asopções de operações
  botao: {
    backgroundColor: '#836FFF',
    margin: 12,
    borderRadius: 15,
    padding: 7,
  },

  // estilo do texto dos botões de operações
  texto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'arial',
  },

  // estilo do texto do começo do APP "calculadora"
  texto2: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'fantasy',
    margin: 25,
  },

  // ajustando os botões para ficar em uma linha com o 1 view
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  // estilo dos botões de input para inserir as informações
  input: {
    backgroundColor: '#6A5ACD',
    color: 'white',
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    height: 40,
    margin: 12,
  },

  // estilo do texto calcular
  texto3: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'fantasy',
    margin: 5,
  },

  // estilo do botão de calcular
  botao2: {
    backgroundColor: '#836FFF',
    color: 'white',
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    height: 40,
    margin: 12,
  },

  //estilo do botão da operação que está sendo selecionado
  selecionar: {
    backgroundColor: '#9370DB',
    borderWidth: 3,
    borderRadius: 5,
  },
});

export default styles;
