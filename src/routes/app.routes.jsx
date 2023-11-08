import { Route, Routes } from "react-router-dom";
import {NavigationBar} from '../components/NavigationBar'
import {Header} from "../components/Header"
import { Home, NotFound, Initial, Faturamento, SettingSystem, Profile } from '../pages';


export const AppRoutes = () => {



  return (<>
  <Header />
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/faturamento" element={<Faturamento />} />
      <Route path="/setting-system" element={<SettingSystem />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <NavigationBar />
    </>);
};
