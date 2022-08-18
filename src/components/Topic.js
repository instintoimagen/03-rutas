import { useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic.toUpperCase()}</h4>
      <img src={`https://placeimg.com/200/200/${topic}`} alt="tecnologia" />
      <p>
        Documentación de <b>{topic}</b> y exponemos la referencia textual
        explicada ampliamente en toda su magnitud y con el detalle lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eveniet quidem laborum
        alias repudiandae quisquam, odio, suscipit aperiam eius, eum sunt a
        totam dolorem vitae ea accusantium cumque sit. Soluta, maxime. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Quasi reiciendis
        maxime consectetur cum ad quam molestias, veritatis, adipisci beatae
        placeat nobis fugit odio animi, id ex? Tempora impedit dicta
        repellendus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quas, cumque? Id, dolore. Veniam, dicta? Atque sint sapiente laudantium,
        voluptatem expedita qui minus, provident sunt voluptate accusantium
        porro, fugit aliquid. Iusto.
      </p>
    </div>
  );
};

export default Topic;
