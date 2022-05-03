import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {DiscordWidget} from "../../Components/DiscordWidget/DiscordWidget";
import {GalleryRow} from "../../Components/GalleryRow/GalleryRow";

export class SpatooJr extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {messages:[], loaded: false};
    }

    componentDidMount() {
        fetch("https://voeyratgg3ausrpbsuyztw2dja0fnxyc.lambda-url.eu-central-1.on.aws/")
            .then(resp => resp.json())
            .then(data => {
                this.setState({messages: data, loaded: true});
            });
    }

    render()
    {
        return <Container className="mt-5">
            <Row>
                <img src="https://media.discordapp.net/attachments/855184223156436992/855188914013077534/Spatoo.png" className="img-fluid col-lg"/>
                <div className="d-flex align-items-center col-lg text-lg-start">
                    <h5>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </h5>
                </div>
            </Row>
            {this.state.loaded ? <DiscordWidget height="400" width="50%" messages={this.state.messages}/> :
                <div className="mt-5">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                </div>}
            <GalleryRow>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
            </GalleryRow>
            <GalleryRow>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
            </GalleryRow>
            <GalleryRow>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
                <Col md>
                    <Image src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" thumbnail/>
                </Col>
            </GalleryRow>
        </Container>
    }
}