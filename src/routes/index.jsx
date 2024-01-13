import React from "react";
import { useAuth } from "./authContext.jsx";

import { AppRoutes } from "./app.routes.jsx";
import { AuthRoutes } from "./auth.routes.jsx";

export const RoutesApp = () => {
  const { user } = useAuth(); // Use o contexto de autenticação

  // Se houver um usuário autenticado (user não é nulo), redirecione para as rotas do aplicativo, caso contrário, redirecione para as rotas de autenticação.
  return user ? <AppRoutes /> : <AuthRoutes />;
};
