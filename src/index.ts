import "reflect-metadata"
import app from './app'
import { AppDataSource } from './db'

async function main() {
    try {
        await AppDataSource.initialize()
        console.log('Database connection established')
        app.listen(4000)
        console.log('Funcionando express con typedcript y typeorm', 4000)

    } catch (error) {
        console.log(error)
    }
}

main()
