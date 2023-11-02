import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, info) {
    // Define o estado para indicar que ocorreu um erro e armazene o erro.
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      // Renderize a página de erro personalizada com a mensagem de erro.
      return (
        <div>
          <h1>Algo deu errado</h1>
          <p>Desculpe, ocorreu um erro inesperado: {this.state.error.message}</p>
        </div>
      );
    }
    // Se não houver erro, renderize os componentes filhos normalmente.
    return this.props.children;
  }
}

export const NotFound = ({ error }) => {
  // Aqui você pode simular um erro passando uma prop error
  if (error) {
    throw error;
  }

  return (
    <p>Página não encontrada</p>
  );
};

// Use o componente ErrorBoundary para envolver a página NotFound
export const ErrorBoundaryNotFound = ({ error }) => (
  <ErrorBoundary>
    <NotFound error={error} />
  </ErrorBoundary>
);
