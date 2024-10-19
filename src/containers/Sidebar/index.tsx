import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}> Vinícius Santos</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        vinisantosn
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro da computação
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
