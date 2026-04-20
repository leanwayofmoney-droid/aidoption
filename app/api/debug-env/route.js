import { NextResponse } from "next/server";

export async function GET() {
  // Toont alleen aanwezig/afwezig — nooit de waarden zelf
  const vars = [
    "REDIS_URL",
    "REDIS_REST_API_URL",
    "REDIS_REST_API_TOKEN",
    "STORAGE_URL",
    "UPSTASH_REDIS_REST_URL",
    "UPSTASH_REDIS_REST_TOKEN",
    "KV_REST_API_URL",
    "KV_REST_API_TOKEN",
    "KV_URL",
  ];
  const result = {};
  for (const v of vars) {
    result[v] = process.env[v] ? "✓ aanwezig" : "✗ ontbreekt";
  }
  return NextResponse.json(result);
}
