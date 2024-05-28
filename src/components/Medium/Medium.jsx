import { useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';

export default function Medium() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  return (
    <div className="news-container">
      <img src="../../assets/mediumLogo.png" style={{ width: '250px' }} alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
