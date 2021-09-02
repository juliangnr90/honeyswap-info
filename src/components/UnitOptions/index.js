import React from "react";
import styled from "styled-components";

const Options = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.span`
  padding: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  opacity: ${(props) => (props.selected ? 1 : 0.6)};
  &:hover {
    opacity: 1;
  }
`;

const Devider = styled.span`
  margin: 0;
  color: white;
`;

const UnitOptions = ({ selected, setSelected }) => {
  return (
    <>
      <Options>
        <Option selected={selected === 'usd'} onClick={() => setSelected('usd')}>
          {" "}
          USD{" "}
        </Option>
        <Devider> / </Devider>
        <Option selected={selected === 'eth'} onClick={() => setSelected('eth')}>
          {" "}
          ETH{" "}
        </Option>
      </Options>
    </>
  );
};

export default UnitOptions;