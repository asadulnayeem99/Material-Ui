import { useEffect, useState } from "react";
import "./App.css";
import News from "./Components/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-08-08&sortBy=publishedAt&apiKey=56d6c0cb5e714bcdafbe1017539ab779";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);
  return (
    <div className="App">
      <h2>Articles headline : {articles.length}</h2>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
}

export default App;
