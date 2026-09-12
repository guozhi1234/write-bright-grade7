import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist');
const publicFiles = ['index.html', 'styles.css', 'app.js'];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of publicFiles) {
  await cp(resolve(file), resolve(outputDirectory, file));
}

console.log(`静态资源已生成到 ${outputDirectory}`);
