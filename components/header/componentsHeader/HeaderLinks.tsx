import React from "react";
import Link from "next/link";
import { Typography, Stack } from "@mui/material";
import { LinkProps } from "../../../types/UI/HeaderLinks";

const HeaderLinks: React.FC<LinkProps> = ({links})=>{
  return (
      <>
        <Stack direction='row' spacing={6} 
          sx={{     
          display: {xs: 'none', sm: 'flex'},
          '& > a:hover': {color: '#69CB2D', transition: '.9s'}
          }}>
          {links.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.text}
            </Link>
          ))}
        </Stack>
      </>
  );
}

export default HeaderLinks;


          {/* {links.map(item=>(
              <Grid ml={1} key={item.id}>
                  <Typography>
                      <Link href={item.href}>
                          {item.text}
                      </Link>
                  </Typography>
              </Grid>
          ))} */}
          {/*{links.map(item=>{
              return <li key={item.id} className={styles.nav__item}>
              <a className={styles.nav__link} href={item.href}>{item.text}</a>
            </li>})}*/}
          {/* {links.map(item=>{
              return <li key={item.id}>
              <a className="nav_link" href={item.href}>{item.text}</a>
            </li>})} */}
