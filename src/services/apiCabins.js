import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Cabins not loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1.create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    throw new Error("Cabin not created!");
  }
  //2. upload image after successul add

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3. prevent new cabin if error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Image could not be saved! please try again");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin could not be deleted");
  }
}
