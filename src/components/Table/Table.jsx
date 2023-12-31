import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang7 ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner66", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake8", 18908421, "2 March 2022", "Delivered"),
  createData("Lasania Chiken Fri1", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang5 ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake7", 18908421, "2 March 2022", "Delivered"),
  createData("Mouth Freshner9", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake6", 18908421, "2 March 2022", "Delivered"),
  createData("Lasania Chiken Fri2", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang6 ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner1", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake5", 18908421, "2 March 2022", "Delivered"),
  createData("Mouth Freshner2", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake4", 18908421, "2 March 2022", "Delivered"),
  createData("Mouth Freshner3", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake3", 18908421, "2 March 2022", "Delivered"),
  createData("Lasania Chiken Fri5", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang4 ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner6", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake2", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3 className="pb-4">Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table
          sx={{ minWidth: 650, overflowY: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row,i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
