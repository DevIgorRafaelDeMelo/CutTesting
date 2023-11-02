import { Route, Routes } from "react-router-dom";
import {Header} from "../components/Header"
import { Home, NotFound, Initial } from '../pages';

export const AppRoutes = () => {
  return (<>

  {<Header />}
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>);
};
