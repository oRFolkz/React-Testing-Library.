import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://toymania.vtexassets.com/arquivos/ids/992101-1600-auto?v=638519204615430000&width=1600&height=auto&aspect=true">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
