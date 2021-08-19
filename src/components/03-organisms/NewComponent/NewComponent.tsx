import React from "react";
import './NewComponent.scss';

export interface NewComponentProps {
  id?: string;
  // Write your props here
}

export const NewComponent = ({
  id, ...props
}: NewComponentProps) => {

  return (
    <div>
      
    </div>
  );
}