import Container from "@mui/material/Container";
import { Table, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

function XlsxFromYoutube(data) {
  
  const cabecera = data.datoss[0];

  return (
    <div>
      <Container>
        {data.datoss.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.keys(cabecera).map((key) => (
                    <TableCell key={key}>{key}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {data.datoss.map((row) => (
                  <TableRow key={row.name}>
                    {Object.values(row).map((value) => (
                      <TableCell key={value}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
}

export default XlsxFromYoutube;
