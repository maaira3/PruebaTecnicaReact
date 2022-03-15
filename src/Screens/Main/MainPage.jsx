import React from 'react'
import SearchBar from '../components/SearchBar'
import Characters from '../Characters/Characters';
import Filter from '../components/Filter';
import Grid from '@material-ui/core/Grid';
import Episodes from '../Episodes/Episodes';
import PaginationCards from '../components/PaginationCards';

export default function MainPage() {
  return (
    <>
    <br/>
    <div className="main">
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <SearchBar/>
      </Grid>
      <Grid item xs>
        <Filter/>
      </Grid>
    </Grid>
    </div>
    <Characters
    type={'main'}/>
    <Episodes
    type={'main'}/>
      <br/>
      
    <br/>
    </>
  )
}
