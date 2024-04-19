import Container from "@mui/material/Container";
import { Table, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

function XlsxFromYoutube(data) {
  return (
    <div>
      <Container>
        {data.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {Object.values(data[0]).map((value) => (
                    <TableCell key={value}>{value}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.name}>
                    {Object.values(row).map(
                      (value) => (
                        <TableCell key={value}>{value}</TableCell>
                      ),
                      2
                    )}
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
