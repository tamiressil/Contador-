
//Importação de módulos o useState é um hook do React, que permite adicionar o estado a um componente de função, neste caso é variável contador que pode mudar ao longo do tempo, como neste caso quando acrecentamos e diminuímos  o contatos já estamos mudando seu estado. 
import React, { useState } from 'react'; 

//Definição do componente: function Contador
function Contador() { 

//Estado do contador: o useState faz com que o contator começe com zero, enquanto o setContador permite atualizar o estado do contador.

  const [contador, setContador] = useState(0); 

//Funções de incremento e decremento
  const incrementar = () => { 

    setContador(contador + 1); 

  }; 

  const decrementar = () => { 

    setContador(contador - 1); 

  }; 
//Renderização do componente
  return ( 

    <div> 

      <h2>Contador</h2> 

      <p>Valor: {contador}</p> 

      <button onClick={incrementar}>Incrementar</button> 

      <button onClick={decrementar}>Decrementar</button> 

    </div> 

  ); 

} 
//Exportação do componente
export default Contador; 