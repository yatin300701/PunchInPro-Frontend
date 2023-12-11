import "./EmployeeMainScreen.scss";
import maleProfilePic from "../assets/male profile.jpg"
import femaleProfilePic from "../assets/female profile.jpg"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function EmployeeMainScreen() {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
  return (
    <>
      <nav className="navbar">
        <img src="https://static-assets.dzylo.com/dzylo/logo.png" />
        <div>
          <h1>Employee Attandance Register</h1>
        </div>
      </nav>
      <div className="employee">
        <article>
          <div className="employee-details">
            <p>Paid leaves left : 20 / year</p>
            <p>Total Leaves Taken : 30 / year</p>
            <p>Total Half Day Leaves Taken: 20 / year</p>
            <p>Total Late Days : 20 / Month</p>
          </div>
          <div className="article-heading">All Records</div>
          <div className="tableContainer">
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="tableheading">Date</TableCell> 
                        <TableCell align="center" className="tableheading">Check In Time</TableCell>
                        <TableCell align="center" className="tableheading">Check Out Time</TableCell>
                        <TableCell align="center" className="tableheading">Remarks</TableCell>
                        <TableCell align="center" className="tableheading">Manager Remarks</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.calories}</TableCell>
                          <TableCell align="center">{row.fat}</TableCell>
                          <TableCell align="center">{row.carbs}</TableCell>
                          <TableCell align="center">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
          </div>
        </article>
        <section>
            <img src={maleProfilePic} />
            <div>
                <ul>
                    <li>
                        Name : yatin
                    </li>
                    <li>
                        Designation : Software Developer
                    </li>
                    <li>
                        Date of birth : 30-07-2001
                    </li>
                    <li>
                        Joined on : 12-3-21
                    </li>
                    <li>
                        Workdays : 220
                    </li>
                    <li>
                        Total Working Days : 320
                    </li>
                </ul>
            </div>
            <div>
              <p>Request Leave</p>
              <p>Request Half day leave</p>
              <p>Request Work From Home</p>
            </div>
        </section>
      </div>
    </>
  );
}
