import { useGetData } from './hooks/useGetData';
import { CurrentDay } from './components/CurrentDay';
import { Week } from './components/Week';
import { HourlyWeather } from './components/HourlyWeather';
import { LocButton } from './components/LocButton';
import { Details } from './components/Details';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Map } from './components/Map';
import { Skeleton } from './skeletons/containers/Skeleton';
import { NotFound } from './components/NotFound';

function App() {
  const { state, onGetLocation, searchCity } = useGetData();

  return (
    <>
      <Header search={searchCity} />
      <main>
        {state.error && <NotFound />}
        {state.loading && <Skeleton />}
        {!state.loading && !state.error && (
          <>
            <CurrentDay
              current={state.data.current}
              address={state.address}
              date={state.date}
            />
            <LocButton onGetLocation={onGetLocation} />
            <HourlyWeather
              hourly={state.data.hourly}
              date={state.date}
            />
            <Week days={state.data.daily} date={state.date} />
            <Details details={state.data.daily[0]} />
            <Map location={{ lat: state.lat, lon: state.lon }} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
