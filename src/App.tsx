import { useContext } from "react";
import "./App.css";
import FormContainer from "./ApplicationForm/components/FormContainer";
import Header from "./ApplicationForm/components/Header";
import ApplicationContext from "./ApplicationContextProvider";

function App() {
  const { onNext, onPrevious, current } = useContext(ApplicationContext);
  return (
    <div className="relative sm:static ubuntu-regular flex bg-white sm:w-[70%] sm:h-[90%] sm:p-5 sm:rounded-xl">
      <Header />
      <div className="flex flex-col justify-between items-center absolute top-24 sm:static sm:w-[70%] min-h-[571px] sm:min-h-0">
        <FormContainer />
        <div className="mt-10 w-full px-2 sm:px-6 bg-white sm:h-10 h-20 items-center flex justify-between sm:mt-0">
          <div className="">
            <button
              className={`${
                current === 1 ? "bg-gray-400 hover:cursor-not-allowed" : "bg-marine-blue hover:cursor-pointer"
              }  text-white p-3 w-[150px] font-bold rounded-md`}
              onClick={onPrevious}
            >
              Previous Step
            </button>
          </div>
          <div className="">
            <button
              className={`bg-marine-blue text-white p-3 w-[150px] font-bold rounded-md hover:cursor-pointer`}
              onClick={onNext}
            >
              {current === 4 ? "Submit" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
