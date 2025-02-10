export const transformJson = string => {
    if (string) {
        try {
            return JSON.parse(string);
        } catch (error) {
            console.error(`Invalid JSON, ${error.message}`);
        }
    }
};
