/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {

 const menu = useLoaderData();

  return (
    <>
    {
      menu.map((pizza) => <MenuItem key={pizza.id} pizza={pizza} />)
    }
    </>
  );
}


export async function loader(){
  const menu = await getMenu();
  return menu;
}

export default Menu;
