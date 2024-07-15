import { glob } from 'glob';
import { fileMove } from '../file-move';
import * as path from 'path';

export async function filesPick(
  cwd: string,
  targetPath: string,
  filter?: (file: string) => boolean
) {
  const files = await glob('**', { cwd, nodir: true });

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (filter && !filter(file)) {
      continue;
    }

    const arr = file.split(path.sep);

    await fileMove(
      path.join(cwd, file),
      path.join(targetPath, arr[arr.length - 1])
    );
  }
}
