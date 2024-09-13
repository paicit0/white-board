import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); 

// Example event listener
socket.on('connect', () => {
  console.log('Connected to server');
});