import RepositoryItem from "../repository-item"
import * as S from "./styled"

function Repositories () {
    return <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                name="repo 1"
                fullName="didi-loiola/contadorRegressivo"
                linkDoRepo="https://github.com/didi-loiola/contadorRegressivo"/>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem 
                name="repo 2"
                fullName="didi-loiola/app-curriculo-dio"
                linkDoRepo="https://github.com/didi-loiola/app-curriculo-dio"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
}

export default Repositories