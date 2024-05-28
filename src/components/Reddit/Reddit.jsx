import { useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { requestArticles } from '../../reducers/redditReducer.js'

export default function Reddit() {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  const articles = useSelector((state) => state.reddit.articles)
  const loading = useSelector((state) => state.reddit.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestArticles)
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  return (
    <div className="news-container">
      <img src="../../assets/redditLogo.png" alt="" className='logo' />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
