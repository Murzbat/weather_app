import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import WeatherDisplay from './WeatherDisplay';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   color: 'white',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
export default function TransitionsModal(props) {
    const [state, setState] = React.useState({activePlace: 0});
    // const [temp, setTemp] = React.useState({temp:[0,0,0,0]})
    const PLACES = props.PLACES
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    console.log(props)
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const showTemp = async (name) => {
      // console.log(PLACES[i].name )
      const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&appid=ebdf8c726c4b51c2da84411ce50fdc0e&units=metric";
      let res = await fetch(URL)
      if (!res.ok) {
        throw new Error(`Could not fetch ${URL}, received ${res.status}`)
      }
      let temps = await res.json()
      // setTemp( temp) 
      // console.log(temp)
      console.log(temps.main.temp)
      // return temp.main.temp
  
    }
      
    console.log(showTemp('Moscow'))
    // showTemp(0)
  
    return (
      <div>
        {/* <button type="button" onClick={handleOpen}>
          react-transition-group
        </button> */}
         { PLACES.map((place, index) => (
          <Button 
            variant="contained" 
            color="primary"
            key = {index}
            onClick = {() => {
                setState({activePlace: index})
                handleOpen()
                }
            }

            >
            {place.name}
            {/* {showTemp(place.name)} */}
            
            
          </Button>
        ))}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
                <WeatherDisplay
                    key = {state.activePlace}
                    name = {PLACES[state.activePlace].name}
                />
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }