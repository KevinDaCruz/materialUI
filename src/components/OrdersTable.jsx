import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const rows = [
  { id: 1, name: "Nom 1", date: "24-04-2025", status: "En cours" },
  { id: 2, name: "Nom 2", date: "19-04-2025", status: "Expédié" },
  { id: 3, name: "Nom 3", date: "15-04-2025", status: "Terminée" },
  { id: 4, name: "Nom 5", date: "27-03-2025", status: "Terminée" },
];

const OrdersTable = () => (
  <Box sx={{ mt: 5, mb: 6 }}>
    <Typography variant="subtitle1" sx={{ mb: 2 }}>
      Dernières commandes
    </Typography>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Box>
);

export default OrdersTable;
