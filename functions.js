export function calcular(n1, n2, n3, setResultado) {
  switch (n3) {
    case '+':
      console.log(typeof parseInt(n1), typeof parseInt(n2));
      setResultado(parseInt(n1) + parseInt(n2));
      break;

    case '-':
      setResultado(n1 - n2);
      break;

    case '*':
      setResultado(n1 * n2);
      break;

    case '/':
      setResultado(n1 / n2);
      break;
  }
}
