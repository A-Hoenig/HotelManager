import supabase from "./supabase";

export async function getcabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins not loaded");
  }

  return data;
}
