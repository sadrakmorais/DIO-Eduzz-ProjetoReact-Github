import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 2px solid #4b134f;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  color: #4b134f;
  background-color: "#fff";
  font-family: "Montserrat", sans-serif;
  margin: 8px;
  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
  display: none;
  margin-top: -5px;
  &.is-selected {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
