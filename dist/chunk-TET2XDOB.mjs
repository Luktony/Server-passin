import {
  generateSlug
} from "./chunk-P2GV4LHW.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/create-event.ts
import z from "zod";
async function createEvent(app) {
  app.withTypeProvider().post("/events", {
    schema: {
      body: z.object({
        title: z.string().min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().nullable()
      }),
      response: {
        201: z.object({
          eventID: z.string().uuid()
        })
      }
    }
  }, async (request, reply) => {
    const {
      title,
      details,
      maximumAttendees
    } = request.body;
    const slug = generateSlug(title);
    const eventWithSlug = await prisma.event.findUnique({
      where: {
        slug
      }
    });
    if (eventWithSlug !== null) {
      throw new Error("Event already exists");
    }
    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximumAttendees,
        slug
      }
    });
    return reply.status(201).send({ eventID: event.id });
  });
}

export {
  createEvent
};
