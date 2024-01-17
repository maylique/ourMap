import CarItem from "../carItem/CarItem";
import {v4 as uuidv4} from 'uuid'

const CarList = ({cars}) => {
    console.log(cars);
    return ( 
    <>
    
    <h1>Das ist ein Carlist Component</h1>

        {{cars}.cars.map((car) => 

    <CarItem 
    keyID={uuidv4()}
    carMarke={car.marke}
    farbe={car.farbe}
    model={car.modell}
    produktionsjahr={car.produktionsjahr}
    ps={car.ps}
    />
        )}
    </> );
}
 
export default CarList;