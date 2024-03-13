import { FastifyInstance } from "fastify";
import { createReadStream } from "node:fs";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post('/audios/:audioId/transcription', async (req) => {
    const paramsSchema = z.object({
      audioId: z.string().uuid(),
    })

    const { audioId } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      prompt: z.string(),
    })

    const { prompt } = bodySchema.parse(req.body)

    const audio = await prisma.audio.findUniqueOrThrow({
      where: {
        id: audioId,
      }
    })

    const audioPath = audio.path
    const audioReadStream = createReadStream(audioPath)

    const response = await openai.audio.transcriptions.create({
      file: audioReadStream,
      model: 'whisper-1',
      language: 'pt',
      response_format: 'json',
      temperature: 0,
      prompt,
    })

    const transcription = response.text

    await prisma.audio.update({
      where: {
        id: audioId,
      },
      data: {
        transcription,
      }
    })

    return {
      transcription,
    }
  })
}