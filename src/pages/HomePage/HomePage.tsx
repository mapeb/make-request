import React, { useState } from 'react';
import { Button, Input, List, Paper, Tab, Table, TableCell, TableRow, TableBody, TableContainer, TableHead } from "@mui/material";
import axios from "axios";

const HomePage = () => {
  const [query, setQuery] = useState("Pizza");
  const [vendors, setVendors] = useState("146591,351158,274880,147435,112306,163934,112786,185926,316361,67566,349044,136324,55350,30466,143029,127612,204591,159600,410897,420462,261380,148992,420485,192662,292923,429469,296044,115202,153941,313286,183376,406573,337236,203072,174631,222836,431568,161114,147056,152874,99789,130863,56841,138351,182237");
  const [lat, setLat] = useState("1.3443872953113458");
  const [long, setLong] = useState("103.86696304232761");
  const [geid, setGeid] = useState("PY_AR");
  const [result, setResult] = useState(["example of result", "another"]);

  const getResult = async () => {
    const {data} =
      await axios.post("https://disco.deliveryhero.io/search/autocomplete/api/v2/homescreen", {
        query,
        customer_id: "",
        global_entity_id: geid,
        vertical_types: ["shops", "restaurants"],
        vendors: vendors.split(","),
        location: {
          point: {
            latitude: parseFloat(lat),
            longitude: parseFloat(long),
          }
        }
      }, {headers: {'Content-Type':'application/json', "accept": "application/json"}});
    //@ts-ignored
    setResult(data.classified_suggestions.map(d => d.search_term));
    console.log(data)
  }

  return (
    <div className="App">
      <div style={{"marginRight":"10px", "display": "inline"}}>Query</div>
      <Input value={query} onChange={(v) => setQuery(v.target.value)}/>
      <hr/>
      <div style={{"marginRight":"10px", "display": "inline"}}>Vendors</div>

      <Input value={vendors} onChange={(v) => setVendors(v.target.value)}/>
      <hr/>
      <div style={{"marginRight":"10px", "display": "inline"}}>Lat</div>

      <Input value={lat} onChange={(v) => setLat(v.target.value)}/>
      <hr/>
      <div style={{"marginRight":"10px", "display": "inline"}}>Long</div>
      <Input value={long} onChange={(v) => setLong(v.target.value)}/>
      <hr/>
      <div style={{"marginRight":"10px", "display": "inline"}}>Geid</div>
      <Input value={geid} onChange={(v) => setGeid(v.target.value)}/>
      <hr/>
      <Button variant="text" onClick={getResult}>Run</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Suggestions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((row) => (
              <TableRow
                key={row}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default HomePage;
