import * as S from './styled'

function Profile() {
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/72869745?v=4" alt="Imagem de perfil"/>
            <S.WrapperInfoUser>
            <div>
                <h1>Diego Loiola</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <span>didi-loiola</span>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
            <div>
                <h4>Followers</h4>
                <span>5</span>
            </div>
            <div>
                <h4>Starreds</h4>
                <span>2</span>
            </div>
            <div>
                <h4>Following</h4>
                <span>5</span>
            </div>
            </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile