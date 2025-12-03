/**
 * Zod validation schemas for options toolkit
 */

import { z } from 'zod';

/**
 * Option leg schema
 */
export const optionLegSchema = z.object({
  id: z.string().min(1),
  type: z.enum(['call', 'put']),
  position: z.enum(['long', 'short']),
  quantity: z.number().positive('Quantity must be positive').int('Quantity must be an integer'),
  strike: z.number().positive('Strike must be positive'),
  premium: z.number().nonnegative('Premium cannot be negative'),
  expiry: z.number().nonnegative('Expiry cannot be negative'),
});

export type OptionLegInput = z.infer<typeof optionLegSchema>;

/**
 * Strategy schema
 */
export const strategySchema = z.object({
  name: z.string().min(1, 'Strategy name is required').max(100),
  legs: z
    .array(optionLegSchema)
    .min(1, 'Strategy must have at least one leg')
    .max(6, 'Strategy cannot have more than 6 legs'),
  underlyingPrice: z.number().positive('Underlying price must be positive'),
});

export type StrategyInput = z.infer<typeof strategySchema>;

/**
 * P/L simulator parameters schema
 */
export const plSimulatorParamsSchema = z.object({
  legs: z
    .array(optionLegSchema)
    .min(1, 'At least one leg is required')
    .max(6, 'Maximum 6 legs allowed'),
  currentPrice: z.number().positive('Current price must be positive'),
  volatility: z
    .number()
    .min(0.001, 'Volatility must be at least 0.1%')
    .max(5.0, 'Volatility cannot exceed 500%'),
  riskFreeRate: z
    .number()
    .min(-0.1, 'Risk-free rate cannot be less than -10%')
    .max(0.5, 'Risk-free rate cannot exceed 50%'),
  dividendYield: z
    .number()
    .min(0, 'Dividend yield cannot be negative')
    .max(0.5, 'Dividend yield cannot exceed 50%'),
});

export type PLSimulatorParamsInput = z.infer<typeof plSimulatorParamsSchema>;

/**
 * Implied volatility parameters schema
 */
export const ivParamsSchema = z.object({
  type: z.enum(['call', 'put']),
  S: z.number().positive('Spot price must be positive'),
  K: z.number().positive('Strike must be positive'),
  T: z.number().nonnegative('Time to expiry cannot be negative'),
  r: z
    .number()
    .min(-0.1, 'Risk-free rate cannot be less than -10%')
    .max(0.5, 'Risk-free rate cannot exceed 50%'),
  q: z
    .number()
    .min(0, 'Dividend yield cannot be negative')
    .max(0.5, 'Dividend yield cannot exceed 50%'),
  marketPrice: z.number().nonnegative('Market price cannot be negative'),
});

export type IVParamsInput = z.infer<typeof ivParamsSchema>;

/**
 * Black-Scholes parameters schema
 */
export const bsParamsSchema = z.object({
  type: z.enum(['call', 'put']),
  S: z.number().positive('Spot price must be positive'),
  K: z.number().positive('Strike must be positive'),
  T: z.number().nonnegative('Time to expiry cannot be negative'),
  r: z
    .number()
    .min(-0.1, 'Risk-free rate cannot be less than -10%')
    .max(0.5, 'Risk-free rate cannot exceed 50%'),
  q: z
    .number()
    .min(0, 'Dividend yield cannot be negative')
    .max(0.5, 'Dividend yield cannot exceed 50%'),
  sigma: z
    .number()
    .min(0.001, 'Volatility must be at least 0.1%')
    .max(5.0, 'Volatility cannot exceed 500%'),
});

export type BSParamsInput = z.infer<typeof bsParamsSchema>;

/**
 * Price range schema
 */
export const priceRangeSchema = z.object({
  min: z.number().positive('Minimum price must be positive'),
  max: z.number().positive('Maximum price must be positive'),
  points: z
    .number()
    .int('Points must be an integer')
    .min(10, 'At least 10 points required')
    .max(1000, 'Maximum 1000 points allowed')
    .optional()
    .default(100),
}).refine(
  (data) => data.max > data.min,
  { message: 'Maximum price must be greater than minimum price' }
);

export type PriceRangeInput = z.infer<typeof priceRangeSchema>;

/**
 * IV surface point schema
 */
export const ivSurfacePointSchema = z.object({
  strike: z.number().positive('Strike must be positive'),
  expiry: z.number().positive('Expiry must be positive'),
  iv: z
    .number()
    .min(0.001, 'IV must be at least 0.1%')
    .max(5.0, 'IV cannot exceed 500%'),
});

export type IVSurfacePointInput = z.infer<typeof ivSurfacePointSchema>;

/**
 * CSV upload schema for IV surface
 */
export const ivSurfaceCSVSchema = z.array(
  z.object({
    strike: z.string().transform((val) => parseFloat(val)),
    expiry: z.string().transform((val) => parseFloat(val)),
    iv: z.string().transform((val) => parseFloat(val)),
  })
).transform((rows) => {
  // Validate after parsing
  return rows.map((row) => ivSurfacePointSchema.parse(row));
});

/**
 * URL params for sharing strategies
 */
export const strategyURLParamsSchema = z.object({
  name: z.string().optional(),
  underlying: z.string().transform((val) => parseFloat(val)).optional(),
  legs: z.string().transform((val) => {
    try {
      return JSON.parse(decodeURIComponent(val));
    } catch {
      throw new Error('Invalid legs parameter');
    }
  }).pipe(z.array(optionLegSchema)).optional(),
});

export type StrategyURLParams = z.infer<typeof strategyURLParamsSchema>;

/**
 * Helper to parse and validate form data
 */
export function validateFormData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: z.ZodError } {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error };
    }
    throw error;
  }
}

/**
 * Format Zod errors for display
 */
export function formatZodErrors(error: z.ZodError): Record<string, string> {
  const formatted: Record<string, string> = {};

  error.errors.forEach((err) => {
    const path = err.path.join('.');
    formatted[path] = err.message;
  });

  return formatted;
}

/**
 * Safe parse with defaults
 */
export function safeParseWithDefaults<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  defaults: T
): T {
  const result = schema.safeParse(data);
  return result.success ? result.data : defaults;
}
