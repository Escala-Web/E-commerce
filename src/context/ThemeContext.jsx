import { createContext, useEffect, useState } from "react";
import { blackTheme, greenTheme, purpleTheme, blueTheme, orangeTheme, redTheme } from '../theme/themeTemplates';

export const ThemeColorContext = createContext();

export const ThemeColorProvider = ({ children }) => {
    const [theme, setTheme] = useState(blueTheme);
    const [colorName, setColorName] = useState('blue'); 

    const changeTheme = (themeName) => {
        let selectedTheme;

        switch (themeName) {
            case 'black':
                selectedTheme = blackTheme;
                break;
            case 'green':
                selectedTheme = greenTheme;
                break;
            case 'purple':
                selectedTheme = purpleTheme;
                break;
            case 'blue':
                selectedTheme = blueTheme;
                break;
            case 'orange':
                selectedTheme = orangeTheme;
                break;
            case 'red':
                selectedTheme = redTheme;
                break;
            default:
                selectedTheme = blueTheme;  
        }

        setTheme(selectedTheme);
        setColorName(themeName); 
        localStorage.setItem('color', colorName)
    };



    return (
        <ThemeColorContext.Provider value={{ theme, colorName, setTheme: changeTheme }}>
            {children}
        </ThemeColorContext.Provider>
    );
};
