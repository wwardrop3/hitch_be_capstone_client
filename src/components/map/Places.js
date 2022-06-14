import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox"
import "@reach/combobox/styles.css"

export const Places = ({setSearchPoint, searchPoint, refresh, setRefresh}) => {

    const {
        ready, 
        value, 
        setValue, 
        suggestions : {status, data}, 
        clearSuggestions
    } = usePlacesAutocomplete();

    const handleSelect = async (val) => {

        setValue(val, false)
        clearSuggestions()
        const results = await getGeocode({address: val})
        const {lat, lng} = getLatLng(results[0])
        const copy = {...searchPoint}
        copy.lat = lat
        copy.lng = lng
        setSearchPoint(copy)



        
        
        
    }

    

    
    return  (
        <>
        <Combobox onSelect = {
            (evt) => {
                
                handleSelect(evt)
                
            }
        } >
        <ComboboxInput 
        value={value} 
        onChange = {
            (evt) => {
                setValue(evt.target.value)
                
            }
        }
        className="combobox-input"
        placeholder="Search for Area" />
        
        <ComboboxPopover>
            <ComboboxList>
                {status === "OK" && data.map(({place_id, description}) => (
                    <ComboboxOption key={place_id} value ={description}/>
                ))}
            </ComboboxList>
        </ComboboxPopover>
        </Combobox>
        </>
    )

    
}