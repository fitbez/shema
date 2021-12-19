import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  //   background: linear-gradient(
  //       rgba(255, 255, 255, 0.5),
  //       rgba(255, 255, 255, 0.5)
  //     ),
  //     url("https://t3.ftcdn.net/jpg/02/11/65/00/240_F_211650054_UtROE3GrkEXAVFBXQ4lDfRPHNx2zLdff.jpg")
  //       right no-repeat;
  //   background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  // opacity: 0.8;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="user name" />
          <Input placeholder="password" />
          <Button>LONGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
