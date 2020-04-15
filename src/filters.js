// setup filter default objects
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters 
// arguments: none
// return value : filters object
const getFilters = () => filters 

// setFilters 
// arguments: update objects with searchText or hidecomplete
// return value : none
const setFilters = ({searchText, hideCompleted}) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}
setFilters(filters)

// make sure to setup the exports 
export { getFilters, setFilters }
