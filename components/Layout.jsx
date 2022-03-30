/** @jsxImportSource theme-ui */
import { ThemeProvider } from "@theme-ui/core"
import { theme } from "../utils/theme"

export default function Layout ({children}) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div sx={{ backgroundColor: "background" }}>
                    <div>
                        {children}
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}