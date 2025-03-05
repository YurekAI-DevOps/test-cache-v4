import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "iCmijcFKyk6tJEdri3w8PR";
export const projectApiToken = "FwuVMbUlYi8WZTaSltE68Y6RjsaWe3CaQL2IYbxd0C4F9QlFw6ffHDq3p38ZSMwJxKxba82JxUyB2gMg";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
