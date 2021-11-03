import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

function App() {
  const { githubState } = useGithub();
  return (
        <Layout>
          {githubState.hasUser ? (<>
            {githubState.loading ? <p>loading</p> : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>) : (<div>Nenhum usuário pesquisado</div>)}
          
        </Layout>
  );
}

export default App;
