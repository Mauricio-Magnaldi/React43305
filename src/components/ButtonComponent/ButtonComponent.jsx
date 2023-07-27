import "./ButtonComponent.css";

function ButtonComponent(props) {

    const { children, colorFondo } = props;
    
    return (
        <div>
            <button className="boton">
                {children}
            </button>
        </div>
    )

}

export default ButtonComponent;