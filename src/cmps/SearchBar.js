import React, {useEffect, useMemo, useState} from 'react';
import { Dropdown,Flex } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css"
import { useDispatch } from 'react-redux';
import { setFilterUsers } from '../store';

export const SearchBar = ({users}) => {
    const [selectedOptions,setSelectedOptions] = useState([]);
    const dispatch = useDispatch();
    const options = useMemo(() => users, []);

    useEffect(() => {
      dispatch(setFilterUsers(selectedOptions))
    },[selectedOptions])

    const onItemSelect = (e) => {
      setSelectedOptions(e);
    }
     const onItemRemove = (e) => {
      setSelectedOptions(selectedOptions.filter((item)=> item!== e))
     }
      return (
      <Flex gap={Flex.gaps.MEDIUM}>
            <div style={{ width: "350px"}}>
                <Dropdown placeholder={"Search Employee"} clearable={false} value={selectedOptions} onChange={onItemSelect} onOptionRemove={onItemRemove} options={options} multi className="dropdown-stories-styles_with-chips" />
              </div>
      </Flex>);
    }
