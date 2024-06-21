const messages = {
    ServerErrorException: 'Alguma coisa saiu errada!',
    InvalidAuthenticationException: 'Seu e-mail ou senha estão inválidos.',
    InvalidPasswordResetTokenException: 'Código inválido/expirado.',
    InvalidEmailVerifyTokenException: 'Código inválido/expirado.',
    UserAlreadyVerifiedException: 'E-mail já está verificado.',
    UserHasBeenTakenException: 'E-mail já cadastrado.',
    UserNotFoundException: 'E-mail não foi localizado no sistema.'
}

export const errorMessage = (code = 'ServerErrorException') => messages[code]

