import { glob } from 'glob';
import * as path from 'path';
import * as fs from 'fs';

export async function filesFlatDepth(cwd: string, depth = 1) {
  const files = await glob('**', { cwd, nodir: true });
  for (let i = 0; i < files.length; i++) {
    const paths = files[i].split(path.sep);
    const filename = paths.pop();

    const oldPath = path.resolve(cwd, files[i]);
    const newPath = path.join.apply(null, [
      cwd,
      ...paths,
      `${paths.join('-')}-${filename}`,
    ]);
    await fs.promises.rename(oldPath, newPath);
  }
}
