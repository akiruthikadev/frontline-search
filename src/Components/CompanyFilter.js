import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useMemo, useReducer } from "react";
import {
  UNSAFE_getPatchRoutesOnNavigationFunction,
  useNavigate,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        companies: action.payload,
        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_NAME":
      return { ...state, queryName: action.payload, page: 1 };

    case "SET_LOCATION":
      return { ...state, queryLocation: action.payload, page: 1 };

    case "SET_INDUSTRY":
      return { ...state, queryIndustry: action.payload, page: 1 };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
const initialState = {
  companies: [],
  loading: false,
  error: null,
  queryName: "",
  queryLocation: "",
  queryIndustry: "",
  page: 1,
  perPage: 4,
};
export default function CompanyFilter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    companies,
    loading,
    queryName,
    queryLocation,
    queryIndustry,
    page,
    perPage,
  } = state;

  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const dataFetching = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const res = await fetch("/companies.json");
        const data = await res.json();
        if (mounted) dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        const fallback = [
          {
            id: 1,
            name: "Acme Corp",
            location: "Bangalore",
            industry: "E-commerce",
          },
          {
            id: 2,
            name: "ByteSoft",
            location: "Chennai",
            industry: "Software",
          },
        ];
        if (mounted) dispatch({ type: "FETCH_SUCCESS", payload: fallback });
      }
    };
    dataFetching();
  }, []);
  const filtered = companies.filter((c) => {
    return (
      c.name.toLowerCase().includes(queryName.toLowerCase()) &&
      c.location.toLowerCase().includes(queryLocation.toLowerCase()) &&
      c.industry.toLowerCase().includes(queryIndustry.toLowerCase())
    );
  });
  const uniqueLocations = useMemo(() => {
    return [...new Set(companies.map((c) => c.location))];
  }, [companies]);
  const uniqueIndustry = useMemo(() => {
    return [...new Set(companies.map((c) => c.industry))];
  }, [companies]);
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <Box sx={{ width: "100%", px: 4, mt: 4, backgroundColor: "#F2F4F7" }}>
      <Box
        sx={{
          backgroundColor: "#0B2C5F",
          py: 3,
          px: 4,
          borderRadius: "8px",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.5px",
          }}
        >
          Frontlines Media
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 4, mt: 4 }}>
        <Box sx={{ width: "30%" }}>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Filters
          </Typography>
          <TextField
            fullWidth
            label="Search by Name"
            variant="outlined"
            value={queryName}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Location</InputLabel>
            <Select
              value={queryLocation}
              label="Location"
              onChange={(e) =>
                dispatch({ type: "SET_LOCATION", payload: e.target.value })
              }
            >
              <MenuItem value="">All</MenuItem>
              {uniqueLocations.map((loc) => (
                <MenuItem value={loc} key={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Industry</InputLabel>
            <Select
              value={queryIndustry}
              label="Industry"
              onChange={(e) =>
                dispatch({ type: "SET_INDUSTRY", payload: e.target.value })
              }
            >
              <MenuItem value="">All</MenuItem>
              {uniqueIndustry.map((ind) => (
                <MenuItem value={ind} key={ind}>
                  {ind}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: "80%" }}>
          {loading && <Typography>Loading...</Typography>}

          {!loading &&
            paginated.map((c) => (
              <Card key={c.id} sx={{ mb: 2, p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "80%" }}>
                    <Typography variant="h6" fontWeight={700}>
                      {c.name}
                    </Typography>
                    <Typography>Location: {c.location}</Typography>
                    <Typography>Department: {c.industry}</Typography>
                  </Box>

                  <Box sx={{ width: "20%", textAlign: "right" }}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => navigate("/")}
                    >
                      Apply
                    </Button>
                  </Box>
                </Box>
              </Card>
            ))}

          {!loading && filtered.length === 0 && (
            <Typography>No companies found.</Typography>
          )}
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, val) => dispatch({ type: "SET_PAGE", payload: val })}
        />
      </Box>
    </Box>
  );
}
