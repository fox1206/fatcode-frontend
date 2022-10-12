import React from "react";
import Link from "next/link";
import { Typography, Stack, Box } from "@mui/material";
import { LinkProps } from "../../../types/UI/HeaderLinks";

const HeaderLinks: React.FC<LinkProps> = ({links})=>{
  return (
      <>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: 6,
          whiteSpace: 'nowrap'
        }}>
          {links.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.text}
            </Link>
          ))}
        </Box>
      </>
  );
}

export default HeaderLinks;