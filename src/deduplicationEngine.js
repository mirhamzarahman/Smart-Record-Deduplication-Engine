/**
 * Smart Record Deduplication Engine
 *
 * A simple linked list based system that removes
 * duplicate consecutive records from sorted data.
 */


class RecordNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class RecordDeduplicationEngine {

    /**
     * Removes duplicate records from a sorted linked list.
     *
     * @param {RecordNode} head - First record node
     * @returns {RecordNode} - Cleaned linked list
     */
    removeDuplicates(head) {

        let currentRecord = head;

        while (
            currentRecord !== null &&
            currentRecord.next !== null
        ) {

            // Detect duplicate consecutive records
            if (
                currentRecord.value === currentRecord.next.value
            ) {

                // Remove duplicate record
                currentRecord.next =
                    currentRecord.next.next;

            } else {

                // Move to next unique record
                currentRecord = currentRecord.next;
            }
        }

        return head;
    }
}


/**
 * Helper function to create linked list
 */
function createRecordList(records) {

    if (records.length === 0) {
        return null;
    }

    const head = new RecordNode(records[0]);
    let current = head;

    for (let i = 1; i < records.length; i++) {

        current.next = new RecordNode(records[i]);
        current = current.next;
    }

    return head;
}


/**
 * Helper function to display linked list
 */
function displayRecords(head) {

    const records = [];
    let current = head;

    while (current) {

        records.push(current.value);
        current = current.next;
    }

    return records;
}


// Example Usage

const incomingRecords = [
    1001,
    1001,
    1002,
    1003,
    1003
];


const engine = new RecordDeduplicationEngine();

const recordList = createRecordList(incomingRecords);

const cleanedRecords =
    engine.removeDuplicates(recordList);


console.log("Original Records:");
console.log(incomingRecords);


console.log("\nCleaned Records:");
console.log(displayRecords(cleanedRecords));
