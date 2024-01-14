import { Button, ButtonGroup } from "@chakra-ui/react";
import "./Onderzoekpagina.css";
import Header from "../../CommonComponents/Header/Header";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Footer from "../../CommonComponents/Footer/Footer";
import {useEffect} from "react"



useEffect(() => {
  document.title = "Onderzoekpagina"
})




export const Onderzoekenpagina = (): JSX.Element => {
  return (
    <div className="onderzoekpagina">
      <Header></Header>
      <main className="OnderzoekContent">
        <div className="OnderzoekContentHeader">
          <h1>Actieve onderzoeken en opdrachten</h1>
        </div>
        <div className="OnderzoekContentList">
          <div className="OnderzoekTabs">
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Alles</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab>Four</Tab>
                <Tab>five</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Alle Onderzoeken</p>
                </TabPanel>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
                <TabPanel>
                  <p>Four</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <div className="OnderzoekenList">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>naam</Th>
                    <Th>soort</Th>
                    <Th>discreption</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Onderzoeknaam</Td>
                    <Td>Onderzoeksoort</Td>
                    <Td>Onderzoekdiscreption</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};
