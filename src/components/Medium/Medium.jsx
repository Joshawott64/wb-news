import { useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { requestArticles } from '../../reducers/mediumReducer.js'

export default function Medium() {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  const articles = useSelector((state) => state.medium.articles)
  const loading = useSelector((state) => state.medium.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestArticles)
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  return (
    <div className="news-container">
      <img src="../../assets/mediumLogo.png" style={{ width: '250px' }} alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
