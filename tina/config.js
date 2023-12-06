import { PdfGenerator } from "../tina-components/PdfGenetator";
import { UploadPDF } from "../tina-components/upload";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "0ad2b629-c4a9-42c8-9e42-b8816dbbecd0", // Get this from tina.io
  token: "4052aa4257da67860d00709c2de0482efc981d55", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Profile",
        name: "profile",
        path: "content/profile",
        format: "mdx",
        fields: [
          {
            label: "Name",
            name: "name",
            type: "string",
          },
          {
            label: "Designation",
            name: "designation",
            type: "string",
          },
        ],
        ui: {
          router: ({ document }) => {
            return `/`;
          },
          beforeSubmit: async ({ form, cms, values }) => {
            let updatedVals = { ...values, name: "am" };
            console.log(updatedVals);

            return { ...updatedVals };
          },
        },
      },
      {
        label: "Articles",
        name: "article",
        path: "content/article",
        format: "mdx",
        ui: {},
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
          },
          {
            type: "string",
            name: "pdf_generator",
            label: "PDF Generator",
            ui: {
              component: PdfGenerator,
            },
          },
        ],
      },
    ],
  },
});
