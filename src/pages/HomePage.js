import React from "react";
import UserImages from "../containers/UserImages";
import { Container, Row, Col, Card, Button } from "reactstrap";


class HomePage extends React.Component {
  render() {
    const { childUsers } = this.props;
    return (
      <>
        {childUsers.map((user, index) => (
          <Container key={index}>
            <Card className="p-3 mx-auto my-4">
              <Row>
                <Col lg="3" md="3">
                  <h4>{user.username}</h4>
                  <img
                    className="border rounded-circle"
                    src={user.profileImage}
                    alt={user.username}
                    width="200"
                  />
                  <p className="m-5">(user, bio)</p>
                </Col>
                <Col lg="9" md="9">
                  <UserImages childId={user.id} />
                </Col>
              </Row>
            </Card>
          </Container>
        ))}
      </>
    );
  }
}
export default HomePage;
