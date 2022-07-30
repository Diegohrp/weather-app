import { useGetData } from './hooks/useGetData';
import { CurrentDay } from './components/CurrentDay';
import { Week } from './components/Week';
import { HourlyWeather } from './components/HourlyWeather';
function App() {
  const [state, handleLocation] = useGetData();

  return (
    <>
      {state.error && <h2>ERROR</h2>}
      {state.loading && <h2>Loading ... </h2>}
      {!state.loading && !state.error && (
        <>
          <CurrentDay current={state.data.current} />
          <button onClick={handleLocation}>Get location</button>
          <HourlyWeather hourly={state.data.hourly} />
          <Week days={state.data.daily} />
        </>
      )}
    </>
  );
}

export default App;