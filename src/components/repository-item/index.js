import * as S from './styled'

function RepositoryItem ({name, fullName, linkDoRepo}) {
    return (
    <S.Wrapper>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperLink 
        href={linkDoRepo}
        taget="_blank"
        rel="noreferrer"
        >
            {fullName}
        </S.WrapperLink>
    </S.Wrapper>
    )
}

export default RepositoryItem