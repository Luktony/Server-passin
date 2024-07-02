import {
  checkIn
} from "./chunk-DF4FV2UC.mjs";
import {
  createEvent
} from "./chunk-TET2XDOB.mjs";
import "./chunk-P2GV4LHW.mjs";
import {
  getAttendeeBadge
} from "./chunk-TY7RCMRW.mjs";
import {
  getEventAttendees
} from "./chunk-52EKUKPL.mjs";
import {
  getEvent
} from "./chunk-TNGO3SC6.mjs";
import {
  registerForEvent
} from "./chunk-DECLA5YJ.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.listen({ port: 3e3 }).then(() => {
  console.log("server running");
});
