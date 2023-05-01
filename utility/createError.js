/**
 * Gerate Custom Error
 * @param {*} status 
 * @param {*} msg 
 * @returns 
 */
const createError = (status, msg) => {
    let err = new Error();
    err.status = status;
    err.message = msg;
    return err;
}

// export default createError
export default createError;