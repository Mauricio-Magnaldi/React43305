import "./ButtonComponent.css";

function ButtonComponent(props) {

    const { children} = props;
  
    return (
        <div>
            <button className="boton">
                {children}
            </button>
        </div>
    )

}

export default ButtonComponent;
