import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Col, Container, Row } from 'react-bootstrap';
import './index.scss'

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='service-accordion'>
            <h3>Our Service</h3>
            <Container>
                <Row style={{ alignItems: 'center' }}>
                    <Col md={6}>
                        <div className="service-img">
                            <img src="https://cdn.shopify.com/s/files/1/0327/6426/4588/files/service-v1-images.jpg?v=1581478443" alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="accordion">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className='title' sx={{ width: '33%', flexShrink: 0, fontSize: '20px', color: '#212529' }}>
                                        Free shipping
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: '#909090' }}>
                                        Lorem ipsum dolor sit amet isse potenti.
                                        Vesquam ante aliquet lacusemper elit.
                                        Cras neque nulla, convallis non commodo et, euismod nonsese.
                                        At vero eos et accusamus et iusto odio qui blanditiis praesentium voluptatum
                                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                        cupiditate
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className='title' sx={{ width: '33%', flexShrink: 0, fontSize: '20px', color: '#212529' }}>Safe payment</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: '#909090' }}>
                                        Lorem ipsum dolor sit amet isse potenti.
                                        Vesquam ante aliquet lacusemper elit.
                                        Cras neque nulla, convallis non commodo et, euismod nonsese.
                                        At vero eos et accusamus et iusto odio qui blanditiis praesentium voluptatum
                                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                        cupiditate
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography className='title' sx={{ width: '40%', flexShrink: 0, fontSize: '20px', color: '#212529' }}>
                                        Shop with confidence
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: '#909090' }}>
                                        Lorem ipsum dolor sit amet isse potenti.
                                        Vesquam ante aliquet lacusemper elit.
                                        Cras neque nulla, convallis non commodo et, euismod nonsese.
                                        At vero eos et accusamus et iusto odio qui blanditiis praesentium voluptatum
                                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                        cupiditate
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}