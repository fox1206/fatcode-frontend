import {Container, Grid, Input, Typography} from "@mui/material";
import RegisterForm from "../components/autorization/RegisterForm"


const Registration = () => {

  return(
      <Container>
          <Grid container>
            <Grid xs={7}>
                <Typography>
                    Выберите питомца
                </Typography>
                <Typography>
                    Тут картинки
                </Typography>
                <Typography>
                    Имя питомца
                </Typography>
                <Input />
            </Grid>
              <Grid xs={5} mt={10}>
                  <Container maxWidth={"xl"}>
                   <RegisterForm/>
                  </Container>
              </Grid>
          </Grid>
      </Container>
  )
}


export default Registration