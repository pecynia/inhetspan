import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'
import { JSONContent } from '@tiptap/react'
// -------------------- DATABASE --------------------

// MongoDB Atlas connection URI
const uri: string | undefined = process.env.MONGODB_URI
if (!uri) throw new Error("The MONGODB_URI environment variable must be defined.")

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

let cachedDb: any = null

// Function to connect to the database
async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb
    }

    // Connect the client to the server
    await client.connect()

    const dbName: string | undefined = process.env.MONGODB_DB
    if (!dbName) throw new Error("The MONGODB_DB environment variable must be defined.")

    const db = client.db(dbName)
    cachedDb = db
    return db
}

// ------------------- WRITING --------------------


// collection: content
// Assuming documentId is of type string. Modify as per your needs.
export async function saveParagraphJson(documentId: string, paragraphJson: JSONContent) {
    const db = await connectToDatabase()
    const collection = db.collection('content')

    // Using documentId as the filter criteria to match the _id field of the desired document
    const filter = { _id: documentId }

    const result = await collection.updateOne(
        filter,
        { $set: { paragraphJson: paragraphJson } },
        { upsert: true }
    )

    return result
}

// Get document given id
export async function getParagraphJson(documentId: string) {
    const db = await connectToDatabase()
    const collection = db.collection('content')
    const result = await collection.findOne({ _id: documentId })
    return result
}
