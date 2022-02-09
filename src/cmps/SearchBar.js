import React, {useMemo} from 'react';
import { Dropdown,Flex } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css"

export const SearchBar = ({users}) => {
    const options = useMemo(() => users, [])
      return <Flex gap={Flex.gaps.MEDIUM}>
              <div style={{
            width: "350px"
          }}>
                <Dropdown options={options} multi className="dropdown-stories-styles_with-chips" />
              </div>
          </Flex>
    }
