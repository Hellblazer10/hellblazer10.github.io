import {
  DataGrid,
  GridColDef,
  escapeRegExp,
  GridToolbar,
  GridToolbarContainer
} from '@material-ui/data-grid';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { createTheme, Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import React from 'react';


const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(0.5, 0.5, 0),
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      },
      textField: {
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
        margin: theme.spacing(1, 0.5, 1.5),
        '& .MuiSvgIcon-root': {
          marginRight: theme.spacing(0.5),
        },
        '& .MuiInput-underline:before': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    }),
  { defaultTheme },
);

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}


function QuickSearchToolbar(props: QuickSearchToolbarProps) {
  const classes = useStyles();

  return (
    <GridToolbarContainer className={classes.root}>
      <div>        
        <GridToolbar />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </GridToolbarContainer>
  );
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'accmType',
    headerName: 'Accomodation Type',
    width: 201,
    editable: false,
  },
  {
    field: 'accmNumber',
    headerName: 'Accomodation Number',
    width: 220,
    editable: true,
  },
  {
    field: 'ownerName',
    headerName: 'Owner Name',
    width: 160,
    editable: true,
  },
  {
    field: 'accmSize',
    headerName: 'Accomodation Size',
    width: 200,
    editable: true,
  },
  {
    field: 'ownberNumber',
    headerName: 'Mobile Number',
    width: 180,
    editable: true,
  },
  {
    field: 'ownerEMail',
    headerName: 'Email',
    width: 140,
    editable: true,
  },
  {
    field: 'openingBalance',
    headerName: 'Opening Balance',
    width: 200,
    editable: true,
  },
];

const data = {
  rows: [
    { id: 1, accmType: 'Flat', accmNumber: '150', ownerName: 'Dinesh Sharma', accmSize: 2000, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '500.00' },
    { id: 2, accmType: 'Shop', accmNumber: '225', ownerName: 'Rajendra Singh', accmSize: 2000, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '1500.00' },
    { id: 3, accmType: 'Shop', accmNumber: '765', ownerName: 'Mahesh Mathur', accmSize: 1500, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5500.00' },
    { id: 4, accmType: 'Flat', accmNumber: '456', ownerName: 'Harish Dhadhich', accmSize: 2350, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '6500.00' },
    { id: 5, accmType: 'Kiosk', accmNumber: '875', ownerName: 'Payal Goyal', accmSize: 1250, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '50000.00' },
    { id: 6, accmType: 'Flat', accmNumber: '456', ownerName: 'Mukesh Singh', accmSize: 1150, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5050.00' },
    { id: 7, accmType: 'Flat', accmNumber: '8745', ownerName: 'Garima Verma', accmSize: 2150, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5010.00' },
    { id: 8, accmType: 'Flat', accmNumber: '9866', ownerName: 'HansRaj', accmSize: 1750, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '2500.00' },
    { id: 9, accmType: 'Kiosk', accmNumber: '907', ownerName: 'Rajesh', accmSize: 1100, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5030.00' },
    { id: 10, accmType: 'Shop', accmNumber: '4534', ownerName: 'Arshdeep', accmSize: 2100, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5200.00' },
    { id: 11, accmType: 'Kiosk', accmNumber: '8776', ownerName: 'Kuldeep', accmSize: 2200, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5200.00' },
    { id: 12, accmType: 'Flat', accmNumber: '554', ownerName: 'Wasim', accmSize: 1200, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5020.00' },
    { id: 13, accmType: 'Flat', accmNumber: '8786', ownerName: 'Mahesh', accmSize: 2300, ownberNumber: 5678767867, ownerEMail: 'abc@gmail.com', openingBalance: '5200.00' },
  ]
};

const UserList = () => {

  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState<any[]>(data.rows);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = data.rows.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(data.rows);
  }, [data.rows]);


  return (
    <div>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
      />
    </div>
  );
}

export default UserList;