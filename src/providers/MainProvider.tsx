import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react"

type ContextType = {
    isMenuOpen: boolean
    toggleMenu: () => void
}

export const ProviderContext = createContext<ContextType>({
    isMenuOpen: false,
    toggleMenu: () => {},
})

// eslint-disable-next-line react-refresh/only-export-components
export const useProvider = () => useContext(ProviderContext)

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = useCallback(
        () => setMenuOpen(!isMenuOpen),
        [isMenuOpen, setMenuOpen]
    )

    const value = useMemo(
        () => ({
            isMenuOpen,
            toggleMenu,
        }),
        [isMenuOpen, toggleMenu]
    )

    return (
        <ProviderContext.Provider value={value}>
            {children}
        </ProviderContext.Provider>
    )
}
