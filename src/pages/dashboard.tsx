import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Dashgo</title>
      </Head>
      
      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
        </Flex>
      </Flex>
    </>
  )
}