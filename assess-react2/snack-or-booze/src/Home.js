import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


/**
 * Landing Page when first entering site
 */
function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <span className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </span>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
