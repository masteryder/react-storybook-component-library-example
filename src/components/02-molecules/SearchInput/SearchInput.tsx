import React from "react";
import { Button } from "../../01-atoms/Button/Button";
import { Input } from "../../01-atoms/Input/Input";
import './SearchInput.scss';

export interface SearchInputProps {
  inputIdentifier: string,
  inputValue?: string,
  inputLabel? : string,
  inputOnChange?: () => void,
  buttonOnClick?: () => void,
}


export const SearchInput = ({inputIdentifier, inputValue, inputLabel, inputOnChange, buttonOnClick}: SearchInputProps) => {
  return (
    <div className="search-input">
      <Input labelText={inputLabel} identifier={inputIdentifier} value={inputValue} onChange={inputOnChange} />
      <Button primary={true} background-color={"#BBBBDD"} size={"small"} label={"Search 🔎"} onClick={buttonOnClick}/>
    </div>
  );
};