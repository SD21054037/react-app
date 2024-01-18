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
import onderzoekenServices from "../../../Services/onderzoeken-services";
import {useState} from "react"
import React from "react";


export interface Onderzoeken {
  id: number;
  naam: string;
  soort: string;
  beschrijving: string;
  typebeperking:string;
  uitvoerder:string;
  adres?:string
  postcode?:string
  link?:string
  beloning:string
  uitnodiging?:string
}

// const [onderzoeken, setOnderzoeken] = useState<Onderzoeken[]>([]);



export const Onderzoekenpagina = (): JSX.Element => {

useEffect(()=> {
  document.title = "Onderzoekenpagina"
})

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
                {/* {onderzoeken.map((onderzoek) => (
                    <Tr key={onderzoek.id}>
                      <Td>{onderzoek.naam}</Td>
                      <Td>{onderzoek.soort}</Td>
                      <Td>{onderzoek.beschrijving}</Td>
                    </Tr>
                  ))} */}
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
