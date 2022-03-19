//React
import {Grid} from "@mui/material";

//Components
import Container from "../../components/Container/Container";

//Style
import style from "./campaigns.module.scss"

const Campaigns = () => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}/>
                <Grid item md={9} xs={12}>
                    <h1 className={style.title}>Campaigns</h1>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Campaigns;
