import * as fs from 'fs';
import * as path from 'path';

export async function fileMove(oldPath: string, newPath: string) {
  await fs.promises.mkdir(path.dirname(newPath), { recursive: true });

  try {
    await fs.promises.rename(oldPath, newPath);
  } catch (e) {
    if (e.code === 'EXDEV') {
      // 3. Copy the file as a fallback
      await fs.promises.copyFile(oldPath, newPath);
      // Remove the old file
      await fs.promises.unlink(oldPath);
    } else {
      // Throw any other error
      console.log(oldPath, newPath);
      throw e;
    }
  }
}
