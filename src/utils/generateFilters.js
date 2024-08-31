export default function generateFilters(values){
    let allTypes = values.map(value => value.type);
    let uniqueTypes = [...new Set(allTypes)];
    let filters = uniqueTypes.map((type, index) => ({
        id : index,
        type : type,
        activ : true
    }))
    const newFilter = { id: filters.length, type: 'concerts (en cours)', activ: false };
    const filtersToDisplay = [...filters, newFilter];
    return filtersToDisplay;
}