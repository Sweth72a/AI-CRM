import { useEffect, useState } from "react";
import API from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setInteractions } from "../redux/interactionSlice";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  TextField,
  Chip,
} from "@mui/material";

function InteractionHistory() {
  const dispatch = useDispatch();

const interactions = useSelector(
  (state) => state.interactions.interactions
);
  const [search, setSearch] = useState("");
  useEffect(() => {
    loadInteractions();
  }, []);

  const loadInteractions = async () => {
    try {
      const response = await API.get("/interactions");
     dispatch(setInteractions(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const editInteraction = async (item) => {

  const newNotes = prompt(
    "Edit Notes",
    item.notes
  );

  if (!newNotes) return;

  try {

    await API.put(`/interactions/${item.id}`, {

      hcp_name: item.hcp_name,
      hospital: item.hospital,
      interaction_type: item.interaction_type,
      notes: newNotes,
      follow_up_date: item.follow_up_date

    });

    loadInteractions();

  }

  catch (error) {

    console.log(error);

  }

};
  return (
    <div
      style={{
        margin: "30px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <Typography variant="h5" gutterBottom>
  Interaction History
</Typography>
  <TextField
  fullWidth
  label="Search Healthcare Professional"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  margin="normal"
/>

    <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><b>ID</b></TableCell>
        <TableCell><b>HCP</b></TableCell>
        <TableCell><b>Hospital</b></TableCell>
        <TableCell><b>Type</b></TableCell>
        <TableCell><b>Follow Up</b></TableCell>
        <TableCell><b>Action</b></TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {interactions
        .filter((item) =>
          item.hcp_name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.hcp_name}</TableCell>
            <TableCell>{item.hospital}</TableCell>
            <TableCell>{item.interaction_type}</TableCell>

            <TableCell>
              {item.follow_up_date}

              {new Date(item.follow_up_date) <= new Date() ? (
                <Chip
                  label="Reminder"
                  color="error"
                  size="small"
                  sx={{ ml: 1 }}
                />
              ) : (
                <Chip
                  label="Upcoming"
                  color="success"
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </TableCell>

            <TableCell>
              <Button
                variant="outlined"
                onClick={() => editInteraction(item)}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  </Table>
</TableContainer> 
    </div>
  );
}

export default InteractionHistory;