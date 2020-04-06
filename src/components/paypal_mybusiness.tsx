import React from "react";

interface PaypalProps {
  buttonID: string;
}
export const PaypalForm: React.FC<PaypalProps> = ({ buttonID }) => {
  const handleClick = () => {
    console.log("clicked");
    // eslint-disable-next-line
    window.gtag("conversion", "click", {
      send_to: ["AW-982999993/ff7lCPW9mMwBELnH3dQD"]
    });
  };

  return (
    <>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={buttonID} />
        <input
          type="image"
          src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif"
          name="submit"
          onClick={handleClick}
          alt="PayPal, la forma más segura y rápida de pagar en línea."
        />
        <img
          alt=""
          src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </>
  );
};
