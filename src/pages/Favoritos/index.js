import styles from "./Favoritos.module.css";
import { useFavoritosContext } from "../../context/Favoritos";
import Card from "../../components/Card/Card";
import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";

function Favoritos() {
    const { favorito } = useFavoritosContext();
    
        return (
        <>
            <Banner img="favorite" color="#44d97d" />
            <Titulo>
            <h1>Mis favoritos</h1>
            </Titulo>
            <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />;
            })}
            </section>
        </>
    );
}
export default Favoritos;