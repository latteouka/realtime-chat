import Button from "@/components/ui/Button";
import { type NextPage } from "next";
import Head from "next/head";

// import { api } from "@/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="">
        <Button variant="default" size="lg">
          THIS IS A Button
        </Button>
      </main>
    </>
  );
};

export default Home;
