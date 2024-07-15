import { filesPick } from './index';
import * as path from 'path';

describe('filesPick', () => {
  it('filesPick', async () => {
    await filesPick('/Users/taibai/Project/Pytorch/image-classify/output', '/Users/taibai/dataset/Shennongjia/黑夜', (file: string) => {
      const paths = file.split(path.sep);
      return paths[paths.length - 2] === '05'
    })
  });
});
