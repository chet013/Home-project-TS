import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import { posts } from '../../data';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const Main = () => {

    return (
        <div>
            {posts.map(post => (
                <Accordion key={post.id}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel-header"
                    >
                        Message №{post.id}
                    </AccordionSummary>
                    <AccordionDetails>
                        {post.message}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}