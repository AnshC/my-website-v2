/** @jsxImportSource theme-ui */
import Navbar from "./Navbar"
import { ThemeProvider } from "@theme-ui/core"
import { theme } from "../utils/theme"

export default function Layout ({children}) {
    const styles = {
        main: {
            minHeight: "100vh"
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <div style={styles.main} sx={{ backgroundColor: "background" }}>
                    <Navbar />
                    {children}
                </div>
            </ThemeProvider>
        </>
    )
}