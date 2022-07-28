import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, MenuItem, TableRow, TextField } from "@mui/material";
import { makeStyles } from '@material-ui/styles';


export const BoxContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));
export const BoxContainerColoum = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

export const FormLayout = styled(Box)(({ theme }) => ({
    border: '1px solid #f0f0f0',
    borderRadius: '4px',
    padding: '20px',
}));


export const LayoutRoot = styled(Box)(({ theme }) => ({
    width: {
        lg: "calc(100% - 250px)",
    },
    height: "calc(100vh - 64px)",
    overflow: "auto",
    paddingTop: "64px",
    background: "#fff",
    [theme.breakpoints.up("lg")]: {
        paddingLeft: 250,
    },
}));

export const LayoutContiner = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    margin: "30px",
    padding: "0px 10px 10px",
    borderRadius: "15px"
}));

export const NavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#20C0F3",
    boxShadow: theme.shadows[3],
    left: {
        lg: 280,
    },
    width: {
        lg: "calc(100% - 250px)",

    },
}));



export const MenuItemMake = styled(MenuItem)(({ theme }) => ({
    color: "#A4A6B3",
}));



export const useStyle = makeStyles((theme) => {
    return {
        sidebar: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#20C0F3",
        },
    };
});

export const TextFieldMake = styled(TextField)(({ theme }) => ({

    "& label": {
        color: "#666",
    },
    "& label.Mui-focused": {
        color: "#ffffff",
        backgroundColor: "#20C0F3",
        padding: "2px 5px",
        borderRadius: "5px 0 5px 0",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "1px solid #A4A6B3",
        },

        "&:hover fieldset": {
            border: "2px solid #A4A6B3",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#A4A6B3",
        },
    },

    "& .MuiOutlinedInput-input": {
        color: "#444",
    },
    marginTop: "10px",
}));

export const LogRegiButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#20C0F3",
    marginTop: '20px',
    marginBottom: '10px',
    borderColor: '#20C0F3',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: 'blue',
        borderColor: 'blue',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#20C0F3',
        borderColor: '#20C0F3',
    },
    '&:focus': {
        boxShadow: 'none',
    },
}));



export const TableBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    border: '1px solid #eaeaea',
    borderRadius: '5px',
}));

export const TableHeading = styled(TableRow)(({ theme }) => ({
    backgroundColor: "#f8f9fa",
    borderRadius: 'none'
}));

export const CancelButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#f0f0f0",
    borderColor: '#f0f0f0',
    textTransform: 'capitalize',
    color: '#ed0707',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

export const AddButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#20C0F3",
    borderColor: '#20C0F3',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: 'blue',
        borderColor: 'blue',
        boxShadow: 'none',
        color: '#fff',
    }
}));


export const FillterBox = styled(Box)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '18px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#333',
    padding: '15px 0px',
    '&:hover': {
        color: '#20C0F3',
    }
}));

export const ButtonMake = styled(Button)(({ theme }) => ({
    padding: "3px 15px",
    borderRadius: '4px',
    border: '2px solid #20C0F3',
    color: '#20C0F3',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    transition: ' all 0.3s',
    [theme.breakpoints.between('md', 'xl')]: {
        marginBottom: '10px'
    },
    '&:hover': {
        border: '2px solid #20C0F3',
        background: '#20C0F3',
        color: '#fff',
    }
}));


export const StatusBtnAccept = styled(Button)(({ theme }) => ({
    backgroundColor: "blue",
    borderColor: 'blue',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

export const StatusBtnPendding = styled(Button)(({ theme }) => ({
    backgroundColor: "red",
    borderColor: 'red',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));
export const StatusBtnCancel = styled(Button)(({ theme }) => ({
    backgroundColor: "yellow",
    borderColor: 'yellow',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

export const SubNabBar = styled(Box)(({ theme }) => ({
    color: "#A4A6B3",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 0px",
}));



