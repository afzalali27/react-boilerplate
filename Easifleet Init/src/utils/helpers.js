// Turn off console logs for production
if(process.env.NODE_ENV === 'production'){
    console.log = () => {};
}
