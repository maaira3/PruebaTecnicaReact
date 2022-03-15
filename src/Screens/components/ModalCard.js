import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux'
import episodeImage from './../../assets/episode.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "38%",
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll',
  color:'white'
};

export default function ModalCard({open, handleClose, id, type}) {
  const characters = useSelector( state => state.characters)
  const character = characters[id]
  const episodes = useSelector( state => state.episodes)
  const episode = episodes[id]

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          {type=='character'
            ?<> 
              <Typography id="modal-modal-title" variant="h4" component="h2">
                <b>Profile</b>
              </Typography>
              <br></br>
              <img src={character.image} width="150" height="150" className='image-modal' align="center" />
              <br/>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Name:</b> {character.name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Status:</b> {character.status}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Species:</b> {character.species}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Type:</b> {character.type}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Gender:</b> {character.gender}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Origin:</b> {character.origin.name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Location:</b> {character.location.name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Episodes:</b> <br/>
                {character.episode.map((episode,i) => 
                <div key={i}>
                  {episode}<br/>
                </div>
                )}
              </Typography>
          </>
          :<> 
              <Typography id="modal-modal-title" variant="h4" component="h2">
                <b>Episode Information</b>
              </Typography>
              <br></br>
              <img src={episodeImage} width="150" height="150" className='image-modal' align="center" />
              <br/>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Name:</b> {episode.name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Air Date:</b> {episode.air_date}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Episode:</b> {episode.episode}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>Characters:</b> <br/>
                {episode.characters.map((character,i) => 
                <div key={i}>
                  {character}<br/>
                </div>
                )}
              </Typography>
          </>
          }
        </Box>
      </Modal>
    </div>
  );
}
