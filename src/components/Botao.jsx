export const Botao = ({texto, onClick}) => {
    return (
      <div>
         <button className={Styles.btnProx} onClick={onClick}>{texto}</button>
      </div>
    );
  };