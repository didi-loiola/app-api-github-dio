import useGithub from '../../hooks/github-hooks'
import Header from '../header'
import * as S from './styled'

function Layout ({ children }) {
    const { githubState } = useGithub();
    return (
        <S.WrapperLayout>
            <Header />
            {githubState.loading ? <p>loading</p> : <>{children}</>}   
        </S.WrapperLayout>
    )
}

export default Layout