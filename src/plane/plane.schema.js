import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

export const planeSchema = z.object({
    planeNumber: z.string().min(8).max(25),
    model: z.string().min(2).max(20),
    maxCapacity: z.string().min(2).max(450),
    airline: z.enum(['Aerolineas Argentinas', 'Flybondi', 'Americans Airlines', 'Jet Smart'])
})

export function validatePlane(data) {
    const result = planeSchema.safeParse(data)

    const {
        hasError,
        errorMessages,
        data: PlaneData
    } = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        PlaneData
    }
}


export function validatePartialPlane(data) {
    const result = planeSchema.partial().safeParse(data)

    const {
        hasError,
        errorMessages,
        data: planeData
    } = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        planeData
    }
}