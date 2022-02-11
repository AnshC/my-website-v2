/** @jsxImportSource theme-ui */
import Navbar from "./Navbar"
import Gradient from "./Gradient"
import cssStyles from '../styles/Components.module.css'
import { ThemeProvider } from "@theme-ui/core"
import { theme } from "../utils/theme"

export default function Layout ({children}) {
    const styles = {
        main: {
            minHeight: "100vh",
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <div style={styles.main} sx={{ backgroundColor: "background" }}>
                    <Gradient />
                    <Navbar/>
                    <div style={{ zIndex: 10, position: "relative" }}>
                        {children}
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}