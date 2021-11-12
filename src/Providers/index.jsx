import { RegisterProvider } from "./registerProvider";
import { LoginProvider } from "./loginProvider";
import { CatalogueProvider } from "./catalogue";
import { UserProvider } from "./userProvider";
import { RatingProvider } from "./rating";
const ProvidersGathered = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <UserProvider>
           <CatalogueProvider>
              {children}
           </CatalogueProvider>
          </UserProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default ProvidersGathered;
