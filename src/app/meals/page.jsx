import SearchMeals from '../components/SearchMeals';
import style from './meals.module.css';

const MealsPage = async ({ searchParams }) => {
  const { search } = searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      return data.meals;
    } catch (error) {
      console.error('Fetching meals error:', error);
      return null;
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div>Meals</div>
      <SearchMeals />
      <div className="grid grid-cols-4 gap-5">
        {meals ? (
          meals.map(m => (
            <h1 className={style.test_class} key={m.strMeal}>
              {m.strMeal}
            </h1>
          ))
        ) : (
          <p>No meals found for this search term.</p>
        )}
      </div>
    </div>
  );
};

export default MealsPage;
