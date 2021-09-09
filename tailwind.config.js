module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#212F3C",
                secodary: "#FFD321"
            },
            fontFamily: {
                poppi: ["poppins,sans-serif"]
            },
            container: {
                center: true,
                padding: "1rem",
                screen: {
                    lg: "1124px",
                    xl: "1124px",
                    "2xl": "1124px",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}