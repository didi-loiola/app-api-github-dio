import * as S from "./styled"

function Repositories () {
    return (
        <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <S.WrapperTablist>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTablist>
        </S.WrapperTabs>
    )
}

export default Repositories