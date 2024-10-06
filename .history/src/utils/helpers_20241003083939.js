const messages = {
    ServerErrorException: 'Alguma coisa saiu errado!',
    InvalidAuthenticationException: 'Seu e-mail e/ou senha estão inválidos.',
    InvalidPasswordResetTokenException: 'Parece que este token está inválido.',
    InvalidEmailVerifyTokenException: 'Parece que este token está inválido.',
    UserAlreadyVerifiedException: 'Este usuário já está verificado.',
    UserHasBeenTakenException: 'Este usuário já existe.',
    UserNotFoundException: 'Usuário não encontrado no nosso sistema.'
}

export const errorMessage = (code = 'ServerErrorException') => messages[code] 

export function getFullUrl(filePath) {
    // Supondo que seu backend esteja rodando no localhost:8000
    const baseUrl = import.meta.env.VITE_API_URL;
    return `${baseUrl}/storage/${filePath}`;
}

export function formatDateToBR(date) {
    if (!date) return "Data não disponível";
    return new Date(date).toLocaleDateString("pt-BR");
}
