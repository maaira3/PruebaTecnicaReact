import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {CardInfo} from './../components/CardInfo';
import episodeImage from './../../assets/episode.png'
import  {useState } from 'react';
import PaginationCards from '../components/PaginationCards';

export default function Episodes({type}) {
    const episodes = useSelector( state => state.episodes)
    const [pagina, setPagina] = useState (1);
    const [porPagina, setPorPagina] = useState (5);
    const maximo = episodes.length / porPagina;

  return (
    <>
    <br></br>
    <div className="cards">
    <Grid container spacing={4}>
        {episodes.slice (
        (pagina - 1) * porPagina,
        (pagina - 1) * porPagina + porPagina
      ).map((episode,i) => 
        <Grid item xs={12} sm={6} md={4} key ={i}>
          <CardInfo
            title={episode.name}
            subtitle={episode.air_date}
            image={episodeImage}
            id = {i}
            type={"episode"}
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
    <br/>
      <br/>
    </div>
    </>
  )
}
