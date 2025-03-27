import { Card } from "./styles"

export const CardPersonalizado = ({ name, icon, click, color, isActive }) => {


    return (
        <>
            <Card isActive={isActive} color={color} onClick={click}>
                <div className="card_container">
                    <div className="card_content">
                        <p>{name}</p>
                        <h1>40,0415</h1>
                    </div>
                    <div className="card_icon">
                        <div className="icon">
                        {icon}
                        </div>
                    </div>
                </div>
                <div className="card_footer">
                    <p><span>8.5% Up</span>  from yesterday</p>
                </div>
            </Card>
        </>
    )
}