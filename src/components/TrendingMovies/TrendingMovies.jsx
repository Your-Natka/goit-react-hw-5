import { Link, useLocation } from 'react-router-dom';
import css from './TrendingMovies.module.css';

const TrendingMovies = ({ items }) => {
  const location = useLocation();
  console.log('TM', location);

  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movie/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default TrendingMovies;
