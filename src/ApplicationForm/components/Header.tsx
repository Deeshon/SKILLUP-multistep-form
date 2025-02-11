import { useContext } from "react";
import Steps from "./Steps";
import ApplicationContext from "../../ApplicationContextProvider";

const Header = () => {
  const {current} = useContext(ApplicationContext);
  return (
    <div className="w-full h-40 mobile-header-bg flex flex-col items-center pt-8 sm:desktop-header-bg sm:w-[30%] sm:h-full sm:rounded-xl">
      <Steps items={[
        {
          title: 'STEP 1',
          description: 'YOUR INFO'
        },
        {
          title: 'STEP 2',
          description: 'SELECT PLAN'
        },
        {
          title: 'STEP 3',
          description: 'ADD-ONS'
        },
        {
          title: 'STEP 4',
          description: 'SUMMARY'
        }
      ]} current={current} />
    </div>
  );
};

export default Header;
