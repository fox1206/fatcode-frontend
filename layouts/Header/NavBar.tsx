import React from 'react';
import { NavBarText } from '../../data/TextsLists';
import HeaderLinks from '../../components/header/componentsHeader/HeaderLinks';
import {Container, Grid, TextField, Typography, Button} from '@mui/material';
import Input from '@mui/material/Input';
import Image from 'next/image';

const NavBar: React.FC = ({children}) => {
  return (
    <>
      <Container maxWidth={"xl"} sx={{
            height: 'auto',
            background: "#E5E5E5",
            color: '#1C1D1E',
            fontSize: 20,
            fontWeight: 600,
            paddingY: 2,
        }}>
            <Grid container alignItems={'center'}>
                <Grid xs={2}>
                    {/*<Image src={}/>*/}
                    {/* <Image 
                      src={'../../../public/assets/image/svg/logoheader.svg'}
                      layout="fill"
                    /> */}
                    {/* <Typography>
                        Fat( )Code
                    </Typography> */}
                </Grid>
                <Grid xs={6} mr={7}
                sx={{
                  display: "flex",
                  justifyContent: 'flex-end'
                }}>
                    <HeaderLinks links={NavBarText}/>
                </Grid>
                <Grid xs={2} mt={-1}>
                    {/* <TextField id="filled-basic"
                               label="Что найти"
                               variant="filled"
                               sx={{ height: ".5em" }}/> */}
                  <Input placeholder='искать тут'
                  sx={{
                    paddingTop: 2,
                    paddingLeft: 2,
                  }}
                  />                
                </Grid>
                <Grid xs={1}>
                    <Button variant='text'
                    sx={{
                      width: '100%',
                      textTransform: 'capitalize',
                      fontWeight: 600,
                      fontSize: 20, 
                      color: '#1C1D1E',
                    }}>
                      Войти
                    </Button>
                </Grid>
                <Grid>

                </Grid>
            </Grid>
        </Container>
    </>    
  );
};

const MemoNavBar = React.memo(NavBar);
export default MemoNavBar;

// MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary css-1nr5b3u-MuiInputBase-root-MuiInput-root
// MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary css-1cmjvb1-MuiInputBase-root-MuiInput-root