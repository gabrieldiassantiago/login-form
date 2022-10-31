import { Container, Title, ContainerInputs, Entrar } from './Styles'

export default function Card () {
    return (
       <div>
        <Container>
        <Title>Login</Title>
        <p>Entre com sua conta para continuar</p>
        <ContainerInputs>
        <input type="text" placeholder='Insira seu email' />
        <input type="text" placeholder='Insira sua senha' /> <br></br>
        <Entrar>Entrar</Entrar>
        <Entrar>Criar conta</Entrar>

        </ContainerInputs>
        </Container>
       </div>

    )
}

