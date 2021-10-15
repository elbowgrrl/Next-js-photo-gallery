import { useRouter } from "next/router";
import data from "/data/landscapes.json";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

export async function getStaticProps() {
  //This could be an API call instead of a file read.
  const allData = await data;

  return {
    props: {
      allData,
    },
  };
}

const View = ({ allData }) => {
  const router = useRouter();
  const { pid } = router.query;
  //this should obviously not be hard coded
  return (
    <div>
      <Image src={allData.album[0].img} width="640" height="320" />
    </div>
  );
};

export default View;
