import init, {greet} from "./pkg/webAssembly.js";

async function initWebAssembly() {
  await init();
};

export {
  initWebAssembly,
  greet,
}
