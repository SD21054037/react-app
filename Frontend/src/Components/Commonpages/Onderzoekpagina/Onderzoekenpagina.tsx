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
import { useNavigate } from "react-router-dom";


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
export const Onderzoekenpagina = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0); 
  const [filteredOnderzoeken, setFilteredOnderzoeken] = useState([]); 

  const onderzoeken = []; 
  
  useEffect(() => {


    document.title = "Onderzoekenpagina";

   // de fetch moet hier komen voor de onderzoeken
    
    const filtered = onderzoeken.filter((onderzoek) => {
      if (activeTab === 0) return true; // Show all onderzoeken for the "Alles" tab
      return onderzoek.soort === `Type for Tab ${activeTab}`;
    });
    // hier moet ik het nog filteren met de fetch van onderzoeken
    
    setFilteredOnderzoeken(filtered);
  }, [activeTab, onderzoeken]);

  const navigate = useNavigate();

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const navigateToOnderzoek = (onderzoekId: number) => {
    
    navigate(`/onderzoek/${onderzoekId}`);
  };

  return (
    <div className="onderzoekpagina">
      <Header></Header>
      <main className="OnderzoekContent">
        <div className="OnderzoekContentHeader">
          <h1>Actieve onderzoeken en opdrachten</h1>
        </div>
        <div className="OnderzoekContentList">
          <div className="OnderzoekTabs">
            <Tabs variant="enclosed" index={activeTab} onChange={handleTabChange}>
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
                  <p>Interviews</p>
                </TabPanel>
                <TabPanel>
                  <p>Online Onderzoeken</p>
                </TabPanel>
                <TabPanel>
                  <p>Engelstalige onderzoeken</p>
                </TabPanel>
                <TabPanel>
                  <p>Groepsgesprekken</p>
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
                    <Th>beschrijving</Th>
                  </Tr>
                </Thead>
                <Tbody>
                {/* {filteredOnderzoeken.map((onderzoek) => (
                    <Tr key={onderzoek.id}>
                      <Td>{onderzoek.naam}</Td>
                      <Td>{onderzoek.soort}</Td>
                      <Td>{onderzoek.beschrijving}</Td>
                      <Td>
                    <Button onClick={() => navigateToOnderzoek(onderzoek.id)}>
                      Details
                    </Button>
                  </Td>
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
