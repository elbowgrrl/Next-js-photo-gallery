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

//ToDo: return an array in the following format by mapping over album data

export async function getStaticPaths() {
  // const photoIDs = getAllPhotoIds();

  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
      {
        params: {
          id: "5",
        },
      },
      {
        params: {
          id: "6",
        },
      },
    ],
    fallback: false,
  };
}

//ToDo: figure out how to render each image based on prop value

const View = ({ allData }) => {
  const router = useRouter();
  const { pid } = router.query;
  //this should obviously not be hard coded
  return (
    <div>
      <Image src={allData.album[1].img} width="640" height="320" />
    </div>
  );
};

export default View;