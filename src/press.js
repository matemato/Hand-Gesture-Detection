export const press = (keyCode, action) =>{
     fetch('/press', {
        headers: {
            method:keyCode,
            action:action
        },
    })
}