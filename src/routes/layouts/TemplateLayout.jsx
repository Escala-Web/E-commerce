import { Outlet } from "react-router-dom";
import { EcommerceHeader } from "../../pages/Ecommerce/components/EcommerceHeader";

export const TemplateLayout = () => {
  return (
    <>
      <EcommerceHeader />
      <Outlet />
    </>
  ); 
};
