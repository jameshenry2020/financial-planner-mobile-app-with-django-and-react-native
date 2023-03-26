export const SIZES={
     // font sizes
     Title: 40,
     h1: 30,
     h2: 22,
     h3: 18,
     h4: 14,
     h5: 12,
     body:16,
}

export const FONTS={
    title: {fontFamily: "Roboto-Black", fontSize: SIZES.Title, fontWeight:'bold'},
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body: { fontFamily: "Roboto-Regular", fontSize: SIZES.body, lineHeight: 22 },
}


const appTheme = { SIZES, FONTS };

export default appTheme;