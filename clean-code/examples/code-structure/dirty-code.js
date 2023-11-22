// (c) ViTech

import storageDirectory from {}

class DiskStorage {
  storageDirectory;

  constructor(directoryName) {
      this.storageDirectory = new StorageDirectory(directoryName);
  }

  getDirectoryPath() {
      return this.storageDirectory.path;
  }

  createDirectory() {
      if (!this.storageDirectory.path) {
          this.storageDirectory.createDirectory();
      }
  }

  // Warning: Directory must exist in advance
  insertFile(fileName, content) {
      const file = this.getDirectoryPath(fileName).open();
      file.write(content);
      file.close();
      // Todo: Add proper error handling
  }
}

const logStorage = new DiskStorage('logs');

logStorage.createDirectory();
logStorage.insertFile('test.txt', 'Test');
