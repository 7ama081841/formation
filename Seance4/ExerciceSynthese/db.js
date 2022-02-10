module.exports = function createDatabase(config = {}) {
    const getCollection = (name) => {
        var collection = [];

        try {
            collection = JSON.parse(localStorage.getItem(name));
        } catch (error) {
            throw new Error("");
        }

        const persist = () => {
            localStorage.setItem(name, JSON.stringify(collection));
        };

        const add = (objOrArray) => {
            if (!Array.isArray(collection)) {
                collection = [];
            }

            if (Array.isArray(objOrArray)) {
                collection.push(...objOrArray);
                persist();

                return;
            }

            collection.push({ ...obj, id: Date.now() });

            persist();
        };

        const remove = (condition) => {
            if (!Array.isArray(collection)) {
                collection = [];
            }

            const records = collection.filter(condition);

            for (const record of records) {
                collection.splice(collection.indexOf(record), 1);
            }

            persist();
        };

        const find = (condition) => {
            if (!Array.isArray(collection)) {
                collection = [];
            }

            const result = collection.find(condition);

            if (result === -1) {
                return null;
            }

            return result;
        };

        const update = (condition, obj) => {
            if (!Array.isArray(collection)) {
                collection = [];
            }

            const result = collection.find(condition);

            let updated = {};

            if (result !== -1) {
                updated = { ...result, ...obj };

                const idx = collection.indexOf(result);

                collection[idx] = updated;

                persist();

                return 1;
            }

            return -1;
        };

        const log = () => {
            console.log(collection);
        };

        return {
            find,
            add,
            remove,
            update,
            persist,
            log,
        };
    };

    return {
        getCollection,
    };
};
