import WindowedSelect, { createFilter, Options } from 'react-windowed-select';
import React from "react";

type Option = {
    label: string;
    value: string;
}

export default function MySelect({ entrants } : { entrants: Options<Option> }): React.JSX.Element {

    const darkStyles = {
        container: (provided: any) => ({
          ...provided,
          backgroundColor: '#222',
          borderTopRightRadius: '0px',
          borderBottomRightRadius: '0px'
        }),
        control: (provided: any, state: any) => ({
          ...provided,
          backgroundColor: '#333',
          color: '#fff',
          border: state.isFocused ? '1px solid white' : '1px solid rgb(110, 41, 230)',
          boxShadow: 'none',
          '&:hover': {
          border: '1px solid white',
          },
          borderTopRightRadius: '0px',
          borderBottomRightRadius: '0px'
        }),
        menu: (provided: any) => ({
          ...provided,
          backgroundColor: '#333',
          color: '#fff',
        }),
        option: (provided: any, state: any) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#555' : '#333',
          color: '#fff',
        }),
        singleValue: (provided: any) => ({
          ...provided,
          color: '#fff',
        }),
        input: (provided: any) => ({
          ...provided,
          color: '#fff',
        })
    }

    return (
        <WindowedSelect
            className="w-4/5 inline-block text-xl h-10 pl-2"
            filterOption={createFilter({ ignoreAccents: false })}
            options={entrants}
            styles={darkStyles}
            placeholder="Search for someone's tag..."
            name="playerName"
            windowThreshold={5}
        />
    )
}
