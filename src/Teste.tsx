import styled from 'styled-components'
type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`

function Teste() {
  return (
    <>
      <Botao principal> Clique aqui </Botao>
    </>
  )
}
export default Teste
