export let functions = {
    toTitleCase :  (text:string) => text.split('\\$1').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('\\$1')
}