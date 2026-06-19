// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const travel_search_flightsTool: Tool = {
  definition: {
    name: 'travel_search_flights',
    description: 'Search flights with filters',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[travel-concierge] travel_search_flights executed');
      return ok('travel_search_flights', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'travel_search_flights',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const travel_search_hotelsTool: Tool = {
  definition: {
    name: 'travel_search_hotels',
    description: 'Search hotels and accommodations',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[travel-concierge] travel_search_hotels executed');
      return ok('travel_search_hotels', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'travel_search_hotels',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const travel_build_itineraryTool: Tool = {
  definition: {
    name: 'travel_build_itinerary',
    description: 'Build multi-stop travel itinerary',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[travel-concierge] travel_build_itinerary executed');
      return ok('travel_build_itinerary', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'travel_build_itinerary',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const travel_monitor_priceTool: Tool = {
  definition: {
    name: 'travel_monitor_price',
    description: 'Monitor price changes and alert',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[travel-concierge] travel_monitor_price executed');
      return ok('travel_monitor_price', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'travel_monitor_price',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-travel-concierge] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-travel-concierge] Unloading...');
}
export const tools: Tool[] = [
  travel_search_flightsTool,
  travel_search_hotelsTool,
  travel_build_itineraryTool,
  travel_monitor_priceTool,
];
