import  sanityClient  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient ({
    projectId: 'l3b4twag',
    dataset: 'production',
    apiVersion: '2022-04-26',
    useCdn: true,
    token: process.env.CZ2M_STORE_SANITY_TOKEN,

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);