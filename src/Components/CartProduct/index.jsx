import { CartCard } from "../../Styles/ComponentsStyle/CartProduct";
import { ButtonComponent } from "../Button";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/userProvider"
export const CartProduct = ({product}) => {
  const [qtd, setQtd] = useState(0);
  const [userToken] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return parseInt(current);
  });

  const { removeFromCart } = useContext(UserContext);

  const handleRemove = () => {
    removeFromCart(product.id, userToken);
  }

  return(
      <CartCard>
          <img src={product.image} alt="coffee" />
          <div className="info">
            <p>{product.name}</p>
            <p className="price">R$: {product.price}</p>
          </div>
          <ButtonComponent variant="brown" text="Remover" onClick={handleRemove}/>
      </CartCard>
  )
}