// Create web server
// Load the comments from the file
// Save the comments to the file
// Add a new comment
// Delete a comment
// Edit a comment

// Load the comments from the file
// Save the comments to the file
// Add a new comment
// Delete a comment
// Edit a comment

const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        const comments = JSON.parse(data);
        comments.push(newComment);
        fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send('Comment added');
        });
    });
});

app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        const comments = JSON.parse(data);
        const newComments = comments.filter((comment) => comment.id !== id);
        fs.writeFile('comments.json', JSON.stringify(newComments), (err) => {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send('Comment deleted');
        });
    });
});

app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedComment = req.body;
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        const comments = JSON.parse(data);
        const newComments = comments.map((comment) => {
            if (comment.id === id) {
                return updatedComment;
            }
            return comment;
        }
        );
        fs.writeFile('comments.json', JSON.stringify(newComments), (err) => {
            if (err) {
                res.status(400).send
                return;
            }
            res.send('Comment updated');
        }
        );
    }
    );
}
);  // Edit a comment       