import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
         <img source="https://avatars.githubusercontent.com/u/72869745?v=4" alt="Imagem de perfil"/>
         <h1>Diego Loiola</h1>
         <h3>Username: </h3>
         <span>didi-loiola</span>
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
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
