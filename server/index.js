import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Home from '../components/Home';
import fs from 'fs';
import React from 'react';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    const indexPath = path.resolve(__dirname, './public/index.html');
    const html = renderToString(
        <SSRProvider>
            <Home />
        </SSRProvider>
    );

        fs.readFile(indexPath, 'utf8', (err, data) => {
            if (err) {
                console.error('error', err);
                return res.status(500).send('An error occurred');
            } 

            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
            );
        });
});

app.use(express.static('./server/public'));

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
})
