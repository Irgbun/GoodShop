import { Menu } from "../Menu";
import { Footer } from "../Footer";
import { Categories } from "../Categories";

export const MainPage = () => {

  return (
    <div>
      <Menu />
      <Categories />
      <Footer text={"FOOTER"} />
    </div>
  );
};
