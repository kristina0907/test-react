//React
import {Grid} from "@mui/material";

//Components
import Container from "../../components/Container/Container";

//Style
import style from "./configure.module.scss";

const Configure = () => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}/>
                <Grid item md={9} xs={12}>
                    <h1 className={style.title}>Configure</h1>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Configure;
