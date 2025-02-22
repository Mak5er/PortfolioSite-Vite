import {createTheme, PaletteColorOptions, ThemeOptions} from '@mui/material/styles';
import {PaletteMode} from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        footer: PaletteColorOptions;
    }

    interface PaletteOptions {
        footer?: PaletteColorOptions;
    }

    interface TypeBackground {
        menu: string;
    }

    interface BackgroundOptions {
        menu?: string;
    }
}

const mainColorDark = '#00efff';

export const darkTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark' as PaletteMode,
        primary: {
            main: mainColorDark,
        },
        background: {
            default: '#000e1e',
            paper: '#000e1e',
            menu: '#010119',
        },
        text: {
            primary: '#ffffff',
            secondary: '#B0B0B0',
        },
        footer: {
            main: '#010119',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000e1e',
                    '&:hover': {
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

const mainColorLight = '#2b32a1';

export const lightTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'light' as PaletteMode,
        primary: {
            main: mainColorLight,
        },
        background: {
            default: '#f5faff',
            paper: '#ffffff',
            menu: '#e3f2fd',
        },
        text: {
            primary: '#000e1e',
            secondary: '#4f4f4f',
        },
        footer: {
            main: '#e3f2fd',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    '&:hover': {
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});
