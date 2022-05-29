import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ textAlign: 'left' }}>
      <Typography sx={{
        padding: "3Q",
        paddingLeft: "2mm",
        fontSize: "min(18vw, 30px)"
      }}>
        クリップボードへコピー
      </Typography>
    </AppBar>
  );
}
