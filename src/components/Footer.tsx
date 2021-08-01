import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const FooterBar = () => {
    return (
        <div>
            <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
                <Toolbar variant="dense">
                    <Typography variant="h6">
                        © Saksham Enterprises
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default FooterBar;