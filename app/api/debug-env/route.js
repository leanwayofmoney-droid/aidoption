import { NextResponse } from "next/server";

export async function GET() {
  // Toont alleen aanwezig/afwezig — nooit de waarden zelf
  const vars = [
    "UPSTASH_REDIS_REST_URL",
    "UPSTASH_REDIS_REST_TOKEN",
    "KV_REST_API_URL",
    "KV_REST_API_TOKEN",
    "KV_URL",
    "KV_REST_API_READ_ONLY_TOKEN",
  ];
  const result = {};
  for (const v of vars) {
    result[v] = process.env[v] ? "✓ aanwezig" : "✗ ontbreekt";
  }
  return NextResponse.json(result);
}
