import express from "express";
import mysql from "mysql2/promise"; // Import the promise version of mysql2

const app = express();
const port = 5000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "suvetracbmm",
  connectionLimit: 10, // Adjust as needed
});

// API endpoint to fetch coordinates for the maps component
app.get("/getCoordinates", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      "SELECT latitude, longitude FROM units"
    );
    connection.release();

    const coordinates = rows.map((row) => ({
      lat: row.latitude,
      lon: row.longitude,
    }));
    res.json(coordinates);
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
