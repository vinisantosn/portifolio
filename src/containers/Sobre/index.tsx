import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aperiam
      at beatae nam animi tempora nostrum modi molestias deleniti provident
      repellendus autem qui dolor ratione, eligendi impedit omnis voluptas
      assumenda.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=vinisantosn&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vinisantosn&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
export default Sobre
