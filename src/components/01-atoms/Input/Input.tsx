import React, {Fragment} from 'react';
import './Input.scss';

export interface InputProps {
  identifier: string,
  type?: string,
  labelText?: string,
  value?: string,
  onChange?: () => void
}

export const Input = ({labelText, type = 'input', identifier, value, onChange}: InputProps)=>{
  return (
    <Fragment>
      <label htmlFor={identifier}>{labelText}</label>
      { type === 'textarea' ?
        (<textarea id={identifier} value={value} onChange={onChange} />) 
      :
        (<input id={identifier} type="text" onChange={onChange} />)}
    </Fragment>
  );
}