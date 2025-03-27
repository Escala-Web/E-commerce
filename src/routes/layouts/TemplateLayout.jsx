import { Outlet } from "react-router-dom";
import { EcommerceHeader } from "../../pages/Ecommerce/components/EcommerceHeader";
import { EcommerceFooter } from "../../pages/Ecommerce/components/EcommerceFooter";

export const TemplateLayout = () => {
  return (
    <>
      <EcommerceHeader />
      <Outlet />
      {/* <EcommerceFooter /> */}
    </>
  ); 
};
