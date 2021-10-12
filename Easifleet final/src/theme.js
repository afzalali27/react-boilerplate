export const breakpoints = ['576px', '768px', '992px', '1290px', '1600px', '1920px','1024px'];

export const theme = {
    colors: {
        white: '#FFF',
        offWhite: '#FCFCFC',
        black: '#000',
        blue: '#0093F3',
        red: '#ef404a',
        green:'#00D3A7',
        purple:'#7D599D',
        pink:'E977AD',
        easiblue: '#282781',
        lightgrey: '#F4F8F9',
        darkGray: '#6B7788'
    },
    fonts: {
        Replica_bold: 'Replica Bold',
        Replica_Regular: 'Replica Regular',
        Replica_Light: 'Replica Light',
    },
    fontSizes: {
        xs: '0.786rem', //11px
        sm: '0.875rem', //12px
        md: '1rem', //14px
        lg: '1.125rem', //16px
        xl: '1.25rem', //18px
        xxl: '1.438rem', //23px
        header:'3.75rem'//60px
    },
    buttonsize: {
        lg: '315px',
    },
    space: {
        xxs: '0.5rem', //8px
        xs: '1rem', //14px
        sm: '1.75rem', //24px
        sm_2: '1.875rem', //30px
        md: '2.5rem', //40px
        lg: '3.5rem', //56px
        xl: '4.5rem', //72px
        xxl: '6rem' //96px
    },
    lineHeights: {
        base: '1.5'
    },
    transitions: {
        default: 'all 0.5s ease'
    },
    radii: {
        default: '4px',
        sm: '4px',
        md: '10px',
        lg: '16px',
        xl: '30px'
    },
    mediaQueries: {
        sm: `@media screen and (min-width: ${breakpoints[0]})`,
        md: `@media screen and (min-width: ${breakpoints[1]})`,
        lg: `@media screen and (min-width: ${breakpoints[2]})`,
        xl: `@media screen and (min-width: ${breakpoints[3]})`,
        xxl: `@media screen and (min-width: ${breakpoints[4]})`,
        xxxl: `@media screen and (min-width: ${breakpoints[5]})`,
        ipadpro: `@media screen and (min-width: ${breakpoints[6]})`
    },
    mediaQueriesMaxWidth: {
        sm: `@media screen and (max-width: ${breakpoints[0]})`,
        md: `@media screen and (max-width: ${breakpoints[1]})`,
        lg: `@media screen and (max-width: ${breakpoints[2]})`,
        xl: `@media screen and (max-width: ${breakpoints[3]})`,
        xxl: `@media screen and (max-width: ${breakpoints[4]})`,
        xxxl: `@media screen and (max-width: ${breakpoints[5]})`,
        ipadpro: `@media screen and (max-width: ${breakpoints[6]})`
    }
};
