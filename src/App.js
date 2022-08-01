import { useGetData } from './hooks/useGetData';
import { CurrentDay } from './components/CurrentDay';
import { Week } from './components/Week';
import { HourlyWeather } from './components/HourlyWeather';
import { LocButton } from './components/LocButton';
import { Details } from './components/Details';
import { Header } from './components/Header';
import { Map } from './components/Map';
function App() {
  const { state, onGetLocation, searchCity } = useGetData();
  return (
    <>
      <Header search={searchCity} />
      <main>
        {state.error && <h2>ERROR</h2>}
        {state.loading && <h2>Loading ... </h2>}
        {!state.loading && !state.error && (
          <>
            <CurrentDay
              current={state.data.current}
              address={state.address}
            />
            <LocButton onGetLocation={onGetLocation} />
            <HourlyWeather hourly={state.data.hourly} />
            <Week days={state.data.daily} />
            <Details details={state.data.daily[0]} />
            <Map location={{ lat: state.lat, lon: state.lon }} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
