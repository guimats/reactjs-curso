// Importar modulos
import React from 'react';
import { createRoot } from 'react-dom/client';

// Componente
class MeuComponente extends React.Component {



    // Função
    mensagem(nome) {
        alert('Olá ' + nome);
        console.log(this);
    }

    minhaArrowFunction = (curso) => {
        alert(`Estou fazendo o curso de ${curso}!`);
    }

    // Render
    render() {
        return(
            <div>
                <button onClick={this.mensagem.bind(this, 'Guilherme')}>Clique aqui</button>
                <button onClick={() => this.minhaArrowFunction('React.JS')}>Arrow Function</button>
            </div>
        );
    }
}

// Estrutura render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<MeuComponente />, document.getElementById('root'));