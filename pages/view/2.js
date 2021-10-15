import Image from "next/image";
import data from "/data/landscapes.json";

export async function getStaticProps() {

  const allData = await data;

  return {
    props: {
      allData,
    },
  };
}

const View = ({ allData }) => {

  return (
    <div>
      <Image src={allData.album[1].img} width="640" height="320" />
    </div>
  );
};

export default View;