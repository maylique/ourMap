const CarItem = ({marke, farbe, modell, Produktionsjahr, ps, keyID}) => {
    return ( 
        <>
        <h1>Das ist ein CarItem Component</h1>
        <h3>keyID: {keyID}</h3>
        <h2>Farbe: {farbe} </h2>
        <h2>Marke: {marke} </h2>
        <h2>Modell: {modell} </h2>
        <p>Produktionsjahr: {Produktionsjahr} </p>
        <p>PS: {ps} </p>
        </>
     );
}
 
export default CarItem;