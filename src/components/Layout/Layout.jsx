//React
import {Grid} from "@mui/material";

//Components
import Container from "../../components/Container/Container";

//Style
import style from "./Layout.module.scss";

const Layout = ({children, title, sidebar, control}) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    {sidebar}
                </Grid>
                <Grid item md={9} xs={12}>
                    <Grid container spacing={2} className={style.head}>
                        <Grid item md={4} xs={12}>
                            <h1 className={style.title}>{title}</h1>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            {control}
                        </Grid>
                    </Grid>
                    {children}
                </Grid>
            </Grid>

        </Container>
    )
}

export default Layout;
