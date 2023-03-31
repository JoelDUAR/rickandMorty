import Card from '../card/Card';
import style from './Cards.module.css';
import { useDispatch } from "react-redux"
import { getFavorites } from '../../redux/actions';
import { useEffect } from 'react';

export default function Cards({ characters, onClose }) {

   const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFavorites())
  }, [])

   return (<div className={style.divContenedorCards}>
      
      {characters?.map(({id, name, species, gender, image})=>{
      return (
         
         
      <Card 
                     key={id}
                     id={id}
                     name={name} 
                     species={species} 
                     gender={gender} 
                     image={image} 
                     onClose={onClose}
                     
                     />
                     )
                     })}
   </div>);
}
