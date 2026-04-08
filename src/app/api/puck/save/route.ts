import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'src/content/puck-data.json')

function isAuthenticated(request: Request): boolean {
    const adminPassword = process.env.PUCK_ADMIN_PASSWORD
    if (!adminPassword) return false
    const authHeader = request.headers.get('authorization')
    if (!authHeader) return false
    const [scheme, token] = authHeader.split(' ')
    if (scheme !== 'Bearer') return false
    return token === adminPassword
}

export async function POST(request: Request) {
    if (!isAuthenticated(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const data = await request.json()

        const dir = path.dirname(DATA_FILE)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }

        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))

        return NextResponse.json({ success: true, message: 'Data saved successfully' })
    } catch (error) {
        console.error('Error saving Puck data:', error)
        return NextResponse.json(
            { error: 'Failed to save data' },
            { status: 500 }
        )
    }
}

export async function GET(request: Request) {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8')
            return NextResponse.json(JSON.parse(fileContent))
        }

        return NextResponse.json({
            content: [],
            root: {},
        })
    } catch (error) {
        console.error('Error loading Puck data:', error)
        return NextResponse.json(
            { error: 'Failed to load data' },
            { status: 500 }
        )
    }
}
