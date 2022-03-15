import {React,useState} from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {CardInfo} from './../components/CardInfo';
import PaginationCards from '../components/PaginationCards';

export default function Characters({type}) {
    const characters = useSelector( state => state.characters)
    const [pagina, setPagina] = useState (1);
    const [porPagina, setPorPagina] = useState (5);
    const maximo = characters.length / porPagina;

  return (
    <>
    <br></br>
    <div className="cards">
      <Grid container spacing={4}>
        {characters.slice (
        (pagina - 1) * porPagina,
        (pagina - 1) * porPagina + porPagina
      ).map((character,i) => 
        <Grid item xs={12} sm={6} md={4} key ={i}>
          <CardInfo
            title={character.name}
            subtitle={character.gender}
            image={character.image}
            id = {i}
            type= {"character"}
          />
      </Grid>
        )}
        {type==='main'
        ?<></>
        :<div className="pagination">
        <div align="center">
          <PaginationCards pagina={pagina} setPagina={setPagina} maximo={maximo}/>
        </div>
      </div>
        }
    </Grid>
    </div>
    <br/>
      <br/>
    </>
  )
}
