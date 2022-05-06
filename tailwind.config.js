module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        fontFamily: {
            sans: "IRANYekan",
        },
        extend: {
            colors: {
                orange: {
                    500: "#FF870F",
                },
            },
            backgroundImage: {
                coding: "url('/images/Coding.jpg')",
                design: "url('/images/Design.jpg')",
                soft: "url('/images/SoftSkills.jpg') ",
            },
        },
    },
    plugins: [],
};
