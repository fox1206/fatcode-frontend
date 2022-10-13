import Grid from "@mui/material/Grid";
import Image from "next/image";
import React from "react";

//Подправить что бы выводился списком
const PetsDonats = () => {
  return(
      <>
        <Grid container>
            <Grid xs={6}>
                <Image src={"/assets/image/svg/Dog.svg"} width={200} height={200} />
            </Grid>
            <Grid sx={{
                borderRadius: 20
            }}>
                <Image src={"/assets/image/svg/Dog.svg"} width={200} height={200} />
            </Grid>
            <Grid>
                <Image src={"/assets/image/svg/Dog.svg"} width={200} height={200} />
            </Grid>
        </Grid>
      </>
  )
}

export default PetsDonats