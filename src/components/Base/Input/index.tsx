"use client";

import React from "react";

import Image from "next/image";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  font-size: 0.875rem;
  width: 100%;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

const Input: React.FC<InputProps> = ({
  placeholder = "...",
  icon,
  ...rest
}) => {
  return (
    <InputContainer>
      <StyledInput placeholder={placeholder} {...rest} />
      {icon && (
        <IconContainer>
          <Image
            src={`/svg/${icon}.svg`}
            alt="Search Icon"
            height={24}
            width={24}
          />
        </IconContainer>
      )}
    </InputContainer>
  );
};

export default Input;
