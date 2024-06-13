import Error from "./components/Error";
import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading";
import Cards from "./components/Cards";

function App() {
  const { loading, error, photos } = useFetch();

  return (
    <>
      <div className="min-h-screen bg-gray-800 flex justify-center items-center">
        {error && !loading && (
          <div>
            <Error />
          </div>
        )}
        {!error && loading && (
          <div>
            <Loading />
          </div>
        )}
        {!error && !loading && (
          <div>
            <Cards photos={photos} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
