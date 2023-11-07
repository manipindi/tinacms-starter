import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

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
        },
      },
    ],
  },
});
