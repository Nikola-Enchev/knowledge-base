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

    insertFile(fileName, content) {
        const filePath = this.getDirectoryPath(fileName);
        const file = filePath.open();
        file.write(content);
        file.close();
    }
}

const logStorage = new DiskStorage('logs');

logStorage.createDirectory();
logStorage.insertFile('test.txt', 'Test');
