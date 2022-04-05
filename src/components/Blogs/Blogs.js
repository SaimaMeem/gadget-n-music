import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='my-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>How React Context API works?</b></Accordion.Header>
                    <Accordion.Body>
                        The <b>React Context API</b> is used to create global variables that can be passed around all the components in a React App. This is a substitute to the "prop drilling" or moving props from grandparent to child to parent, and so on. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components which is not a very optimal solution.
                        <br></br>
                        At first, <b>React.createContext()</b> is used to create a context. It returns a consumer and a provider. Provider is a component that offers the state to its children. It keeps the "store" and be the parent of all the components that might need that store later. Here, consumer is a component that consumes and uses the state.


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>What is Semantic tag?</b></Accordion.Header>
                    <Accordion.Body>
                        Semantic HTML or semantic markup is HTML that showcases meaning to the web page rather than just the presentation. For example, a <b>p</b> tag designates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them. Similarly, header, footer, section tags make it easier for the developers to go through codes easily.
                        <br></br>
                        On the contrary, tags like <b>b</b> and <b>i</b> are not semantic. They describe only how the text should look (bold or italic), and don't provide any additional meaning to the markup.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Differences between Inline vs Inline-block.</b></Accordion.Header>
                    <Accordion.Body>
                        Every HTML element has a default display value, depending on what type of element it is and these display values are block and inline. A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available. For example, <b>div</b>,  <b>div</b>, <b>section</b> etc. tags are block elements. An inline element does not start on a new line. An inline element only takes up as much width as necessary. For example, <b>span</b>, <b>input</b>, <b>b</b> etc. tags are inline elements.
                        <br></br>
                        Now, comes inline-block element which is basically a combination of both inline and block elements. It’s configured just like the inline element, where it doesn’t start on a new line. But it can have width and height values. There are no default inline-block elements. But inline elements can be changed into inline-block elements if needed.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;