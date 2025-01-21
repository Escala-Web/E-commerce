import { createContext, useEffect, useState } from "react";
import { blackTheme, greenTheme, purpleTheme, blueTheme, orangeTheme, redTheme } from '../theme/themeTemplates';

export const ThemeColorContetx = createContext();

export const ThemeColorProvider = ({ children }) => {

    const storedTheme = localStorage.getItem('themeColor');
    const [theme, setTheme] = useState(storedTheme ? JSON.parse(storedTheme) : blueTheme);

    useEffect(() => {
        localStorage.setItem('themeColor', JSON.stringify(theme));
    }, [theme]);

    const changeTheme = (themeName) => {
        switch (themeName) {
            case 'black':
                setTheme(blackTheme);
                break;
            case 'green':
                setTheme(greenTheme);
                break;
            case 'purple':
                setTheme(purpleTheme);
                break;
            case 'blue':
                setTheme(blueTheme);
                break;
            case 'orange':
                setTheme(orangeTheme);
                break;
            case 'red':
                setTheme(redTheme);
                break;
            default:
                setTheme(blueTheme); 
        }
    };

    return (
        <ThemeColorContetx.Provider value={{ theme, setTheme: changeTheme }}>
            {children}
        </ThemeColorContetx.Provider>
    );
};
