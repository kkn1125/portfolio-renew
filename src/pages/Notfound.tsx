import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="page-shell not-found">
      <Typography variant="h1" component="h1">
        페이지를 찾을 수 없습니다.
      </Typography>
      <p>주소가 변경되었거나 존재하지 않는 프로젝트입니다.</p>
      <Button component={Link} to="/portfolio" variant="contained">
        프로젝트 색인으로 이동
      </Button>
    </div>
  );
}
