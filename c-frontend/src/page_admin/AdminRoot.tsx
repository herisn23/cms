import * as React from "react";
import {BrowserRouter as Router, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import LoginPage from "./LoginPage";
import {AppBar, Container, createMuiTheme, CssBaseline, ThemeProvider, Toolbar} from "@material-ui/core";
import {Provider} from "use-http/dist";
import {AppContext} from "../context/admin/AppContext";
import AdminApp from "./AdminApp";
import {LoadingContext} from "../context/LoadingContext";
import theme from "../assets/AdminTheme";


export function AdminRoot() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <LoadingContext>
                <AppContext>
                    <AdminApp />
                </AppContext>
            </LoadingContext>
        </ThemeProvider>
    );
}
