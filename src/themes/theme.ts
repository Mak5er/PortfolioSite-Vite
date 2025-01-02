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
        menu: string; // Тип для menu
    }

    interface BackgroundOptions {
        menu?: string; // Тип для menu в options
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

const mainColorLight = '#4a65e8';

export const lightTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'light' as PaletteMode,
        primary: {
            main: mainColorLight,
        },
        background: {
            default: '#E3E6ECFF',
            paper: '#E3E6ECFF',
            menu: '#DBE2EF',
        },
        text: {
            primary: '#000000',
            secondary: '#112D4E',
        },
        footer: {
            main: '#DBE2EF',
        },

    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#DBE2EF',
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
