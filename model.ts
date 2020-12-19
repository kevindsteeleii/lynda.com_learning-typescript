let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost;

originalCost = "A lot of $$$";

if(typeof originalCost === "number") {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}


// enum InventoryType {
//   Computer = "computer",
//   Furniture = "furniture"
// }

interface InventoryItem {
  displayName: string;
  inventoryType: "computer" | "furniture";
  trackingNumber: string;
  createDate: Date;
  originalCost?: number;
  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {
 
}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

// saveInventoryItem(inventoryItem);
saveInventoryItem({
  displayName: "Mac Book Pro 15 Retina",
  inventoryType: "computer",
  trackingNumber: "MBP123456",
  createDate: new Date()
});

function clone<T, U>(source: T, options: U): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized);
}

const cloned = clone<InventoryItem, any>(inventoryItem, {});

interface KeyValuePair<TKey, TValue> {
  Key: TKey;
  Value: TValue;
}

var keyValue: KeyValuePair<string, number> = { Key: "something", Value: 3 }

var keyValue2: KeyValuePair<number, boolean> = { Key: 123, Value: false}

declare var Vue: any;