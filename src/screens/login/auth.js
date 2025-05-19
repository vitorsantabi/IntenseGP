export const authenticate = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "user@email.com" && password === "123456") {
        resolve({
          success: true,
          user: {
            email: "user@email.com",
            name: "Usuário Teste",
          },
        });
      } else {
        resolve({
          success: false,
          message: "Credenciais inválidas",
        });
      }
    }, 1000);
  });
};