import styled from "styled-components";
import { categories } from "../data";
import CatagoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", height: "100vh" })}
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => {
        return <CatagoryItem item={item} key={item.id}></CatagoryItem>;
      })}
    </Container>
  );
}

export default Categories;
