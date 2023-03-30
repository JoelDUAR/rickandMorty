import style from './About.module.css';
import rickFachero from "../../assets/img/rickFachero.png"
import fotoAbout from "../../assets/img/fotoAbout.jpg"


export default function About(){
    return(
        <div className={style.containerPrincipal}>
        <div className={style.divContainer}>
       <img src={fotoAbout} alt="Imagen" className={style.fotoAbout} />
     </div>
     <div className={style.containerAbout}>
       <p className={style.aboutPrincipal}>
         Hola, mi nombre es Joel Dupraz</p>
       <p className={style.aboutBiografia}>
         Tengo 31 años, argentino, residente en Córdoba Capital. Soy estudiante de Henry, en la carrera de Desarrollador Web Fullstack.
         Aquí les presento mi primera app React de Rick y Morty, como parte de un proyecto integrador que seguirá en desarrollo.
         Espero sea de tu agrado este perfil.
       </p>
     </div>
     <p className={style.aboutSaludos}>¡¡Dos facheros te saludan!!</p>
     <div className = {style.containerImg}>
       <img src={rickFachero} alt="Rick fachero"  className={style.rickImg}/>
     </div>
     </div>
    )
}